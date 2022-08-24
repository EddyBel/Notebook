import { createContext, useState, useContext, useEffect } from 'react'
import { getDataUser } from '../services/gitHub'


// Crea el contexto
const UserContext = createContext()

// Usar el contexto
export const useUser = () => useContext(UserContext);

// Provedor del contexto
export const UserProvider = ({ children }) => {

    // Estado de informacion.
    const [user, setUser] = useState({
        name: null,
        img: null
    })

    // Agregar informacion de usuario.
    const addDataUser = (data) => {
        setUser({
            name: data.login,
            img: data.avatar_url,
        })
    }

    // Ejecutar la obtencion de datos de la api y la fecha actual.
    useEffect(() => {
        getDataUser().then(response => addDataUser(response))
    }, [])

    // Verificar que los datos llegaron
    // useEffect(() => {
    //     console.log(user)
    // }, [user])

    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}
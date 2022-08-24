const API = (user) => `https://api.github.com/users/${user}`

export function getDataUser () {
    const data = fetch(API('EddyBel')).then(response => response.json())
    return data
}
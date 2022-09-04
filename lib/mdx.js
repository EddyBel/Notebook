import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";


const { themes } = require('../config.json')
const fs = require('fs')

// ruta principal
const root = process.cwd();
// Ruta de carpeta base
const pathBase = path.join(root, "notes")
// Ruta por carpeta
const pathFiles = (tecnology) => path.join(pathBase, tecnology)


// Obtener todos los archivos de la carpeta
export const getFiles = (tecnology) => fs.readdirSync(pathFiles(tecnology))


// Obtener el archivo de acuerdo a la ruta
export const getFilesByRoute = async (file, tecnology) => {

    // Obtener el archivo pasado por su ruta
    const note = fs.readFileSync(
        path.join(pathFiles(tecnology), file)
    );

    // Leer el archivo, desestructurar por sus datos y contenido
    const { data, content } = matter(note);


    // Formatea el contenido del archivo mdx
    const source = await serialize(content, {});

    return {
        source,
        frontmatter: { ...data }
    };
};



// Obtener la meta data de todos los archivos mdx
export const getAllFilesMetadata = (tecnology) => {

    // Obtener todos lo archivos
    const files = getFiles(tecnology)

    // Recorre los archivos (archivos mdx, o md) y retorna el metadata de todos los archivos
    return files.reduce((allPosts, postRoute) => {

        // Leer el arhivo en formato utf-8
        const fileMdx = fs.readFileSync(
            path.join(pathFiles(tecnology), postRoute),
            "utf-8"
        );

        // Extraer el metadata
        const { data } = matter(fileMdx);

        // Retorna el metadata y el nombre del archivo
        return [
            {
                ...data,
                route: postRoute
            },
            ...allPosts
        ];
    }, []);
};



// Validar el tema 
export const validateTheme = (theme) => {
    if (theme === 'Inteligencia Artificial') return 'IA'
    else if (theme === 'C#') return 'CS'
    else return theme
}

// Buscar si archivo termina en md o mdx
export const checkExtension = (file = '') => {
    if (file.includes('.mdx')) return file.replace(".mdx", "")
    else if (file.includes('.md')) return file.replace(".md", "")
    else return file
}

// Obtener la extension de archivo
export const getExtension = (file) => {
    if (file.includes('.mdx')) return ".mdx"
    else if (file.includes('.md')) return ".md"
    else return ".mdx"
}

// Buscar todos los archivos. 
export const getAllFiles = () => {

    const data = []
    const numberFilesByTheme = []

    themes.map(async theme => {
        const name_theme = validateTheme(theme.theme)
        const files = await getFiles(name_theme)

        let count = 0

        files.map((file) => {
            count = count + 1
            data.push({
                folder: name_theme,
                file,
                name_file: checkExtension(file),
                extension: getExtension(file)
            })
        })

        numberFilesByTheme.push({
            theme: name_theme,
            numberFiles: count
        })

    })

    return {
        data,
        numberFilesByTheme
    }

}
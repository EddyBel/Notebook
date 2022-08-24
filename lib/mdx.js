// import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const fs = require('fs')

// ruta principal
const root = process.cwd();
// Ruta de archivos mdx
const pathMdx = path.join(root, "notes")

export const getFiles = () => fs.readdirSync(pathMdx)

// Obtener el archivo de acuerdo a la ruta
export const getFilesByRoute = async (route) => {
    // Obtener el archivo pasado por su ruta
    const fileMdx = fs.readFileSync(
        path.join(pathMdx, `${route}.mdx`)
    );
    // Leer el archivo, desestructurar por sus datos y contenido
    const { data, content } = await matter(fileMdx);
    // Formatea el contenido del archivo mdx
    const source = await serialize(content, {});

    return {
        source,
        frontmatter: {
            route,
            ...data,
        },
    };
};

// Obtener la meta data de todos los archivos mdx
export const getAllFilesMetadata = () => {
    // Obtener todos lo archivos mdx
    const files = getFiles()

    // Recorre los posts (archivos mdx) y retorna el metadata del post
    return files.reduce((allPosts, postRoute) => {
        const fileMdx = fs.readFileSync(
            path.join(pathMdx, postRoute),
            "utf-8"
        );
        const { data } = matter(fileMdx);

        return [
            {
                ...data,
                route: postRoute.replace('.mdx', ''),
            },
            ...allPosts
        ];
    }, []);
};
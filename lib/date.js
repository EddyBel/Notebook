const mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export function getDate() {
    const date = new Date()
    const dateObj = {
        day: date.getDate(),
        mounth: date.getMonth(),
        year: date.getFullYear(),
    }
    return dateObj
}

export function formatDate(object, format) {
    const mounthT = mounth[object.mounth]
    switch (format) {
        case 'dd/mm/yy text':
            return `${object.day} de ${mounthT} del ${object.year}`
        default:
            return 'Error'
    }
}
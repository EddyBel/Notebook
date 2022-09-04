const config = require('../config.json')

const API = (user) => `https://api.github.com/users/${user}`

export function getDataUser () {
    const data = fetch(API(config.user)).then(response => response.json())
    return data
}
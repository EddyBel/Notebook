import { JS, NODE, PYTHON, Document } from '../components/common/svg'

export function language(language, classN) {
    if (language === 'JS' || language === 'js' || language === 'JavaScript') return <JS classN={classN} />
    else if (language === 'NODE' || language === 'node' || language === 'Node' || language === 'NodeJS' || language === 'NODEJS' || language === 'NodeJs') return <NODE classN={classN} />
    else if (language === 'PYTHON' || language === 'Python' || language === 'python') return <PYTHON classN={classN} />
    else return <Document classN={classN} />
}

export function languageString(string) {
    if (string === 'js') return 'JavaScript'
    else if (string === 'python') return ' Python'
    else if (string === 'json') return 'JSON'
    else if (string === 'cp') return 'C+'
    else if (string === 'bash') return 'Bash'
    else return 'Documento'
}
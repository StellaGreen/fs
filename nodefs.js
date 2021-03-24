const fs = require('fs')

//lire un fichier dans ce cas là créer un fichier avec le texte precis
if(process.argv[2] === 'echo'){
switch (process.argv.length) {
    case 2:
        console.log(`usage echo : node nodefs.js echo 'nom du fichier a créer' 'texte a mettre dans le fichier'\n`)
        process.exit(1)
    case 3:
        console.log(`usage echo : node nodefs.js echo 'nom du fichier a créer' 'texte a mettre dans le fichier'\n`)
        process.exit(1)
    default:
}
fs.writeFileSync(process.argv[3], process.argv[4])
}

// fait une copie du fichier a dans le nouveau fichier B
if(process.argv[2] === 'cp'){
    switch (process.argv.length) {
        case 2:
            console.log(`usage echo : node nodefs.js cp 'nom du fichier a copier' 'nom du nouveau fichier qui contiendra la copie'\n`)
            process.exit(1)
        case 3:
            console.log(`usage echo : node nodefs.js cp 'nom du fichier a copier' 'nom du nouveau fichier qui contiendra la copie'\n`)
            process.exit(1)
        default:
    }
fs.copyFileSync(process.argv[3], process.argv[4])
}

//créer un nouveau dossier
if(process.argv[2] === 'mkdir'){
    switch (process.argv.length) {
        case 2:
            console.log(`usage echo : node nodefs.js mkdir 'nom du fichier a créer'\n`)
            process.exit(1)
        case 3:
            console.log(`usage echo : node nodefs.js mkdir 'nom du fichier a créer'\n`)
            process.exit(1)
        default:
    }
mkdirSync(process.argv[3])
}
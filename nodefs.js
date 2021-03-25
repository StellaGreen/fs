const fs = require('fs')

//lire un fichier dans ce cas là créer un fichier avec le texte precis
if(process.argv[2] === 'echo'){
//verifier la cmd line
if(process.argv.length !== 4){
    console.log('usage: node echo file text')
    process.exit(1)
}

//check if file exist
if(!fs.existsSync(process.argv[2])){
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}
fs.writeFileSync(process.argv[3], process.argv[4])
}

// fait une copie du fichier a dans le nouveau fichier B
if(process.argv[2] === 'cp'){
 //verifier la cmd line
if(process.argv.length !== 4){
    console.log('usage: node cp fileA fileB')
    process.exit(1)
}

//check if file exist
if(!fs.existsSync(process.argv[2])){
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}
fs.copyFileSync(process.argv[3], process.argv[4])
}

//créer un nouveau dossier
if(process.argv[2] === 'mkdir'){
//verifier la cmd line
if(process.argv.length !== 3){
    console.log('usage: node mkdir')
    process.exit(1)
}

//check if file exist
if(!fs.existsSync(process.argv[2])){
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}
mkdirSync(process.argv[3])
}
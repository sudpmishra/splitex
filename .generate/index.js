const fs = require('fs');
const { component, service } = require('./template.js');

// grab component name from terminal argument
const [name] = process.argv.slice(3);
if (!name) throw new Error('You must include a component name.');

var dir = ''
var error = null


// throw an error if the file already exists

// create the folder
try {
    if (process.argv[2].toLowerCase() === 'p' || process.argv[2].toLowerCase() === 'page') {
        dir = `./src/Pages/${name}`;
        if (fs.existsSync(dir)) writeFileErrorHandler(Error('A file/folder with that name already exists.'));
        fs.mkdirSync(dir);
        fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
        fs.writeFile(`${dir}/${name}.css`, '', writeFileErrorHandler);
    } else if (process.argv[2].toLowerCase() === 'c' || process.argv[2].toLowerCase() === 'component') {
        dir = `./src/Components/${name}`;
        if (fs.existsSync(dir)) writeFileErrorHandler(Error('A file/folder with that name already exists.'));
        fs.mkdirSync(dir);
        fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
        fs.writeFile(`${dir}/${name}.css`, '', writeFileErrorHandler);
    } else if (process.argv[2].toLowerCase() === 's' || process.argv[2].toLowerCase() === 'service') {
        dir = `./src/Services`;
        fs.writeFile(`${dir}/${name}Service.js`, service(), writeFileErrorHandler);
    } else {
        writeFileErrorHandler(Error('Please Specify Component, Page or Service.'))
    }
}
catch (err) {
    writeFileErrorHandler(err)
}
if (!error) {
    console.log("\x1b[32m%s\x1b[0m", 'Component Generated Successfully.')
}

function writeFileErrorHandler(err) {
    error = err;
    if (err) {
        console.log("\x1b[41m%s\x1b[0m", err.message);
    }
}
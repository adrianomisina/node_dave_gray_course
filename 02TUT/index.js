const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you',(err) => {
    if (err) throw err;
    console.log(`Write complete`);
})

fs.appendFileFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you',(err) => {
    if (err) throw err;
    console.log(`Write complete`);
})

//exit on uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaght error: ${err}`);
    process.exit(1);
})

//26:14
let path = require('path')
let ejs = require('ejs');
let fs = require('fs');

const templatePath = path.join(process.cwd(), 'resume.ejs')
const dataPath = path.join(process.cwd(), 'resume.json')
const outPath = path.join(process.cwd(), 'resume.tex')

fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) throw err;
    ejs.renderFile(
        templatePath,
        {...JSON.parse(data)},
        {
            escape: function (t) {
                return t
                    .replace(/#/g, '\\#')
                    .replace(/%/g, '\\%')
                    .replace(/&/g, '\\&')
                    .replace(/\$/g, '\\$')
                    .replace(/_/g, '\\_')
                    // .replace(/{/g, '\\{')
                    // .replace(/}/g, '\\}')
                    .replace(/^null$/g, '')
            }
        },
        (err, str) => {
            if (err) {
                console.error(err)
            }
            fs.writeFile(outPath, str, err => { })
        }
    )
});
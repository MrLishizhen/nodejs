const fs = require('fs')

const files = fs.readdirSync('./fs')
// console.log(files)
files.forEach((item) => {
    let [num, name] = item.split('-')
    console.log(num, name)

    if (Number(num) < 10) {
        num = '0' + num;
        fs.renameSync('./fs/' + item, './fs/' + num + '-' + name)
    }

})
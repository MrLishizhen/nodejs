const fs = require('fs')

//调用 rename方法 重命名
// fs.rename('oldPath,newPath,callback')
// fs.rename('./座右铭.txt', './论语.txt', err => {
//     if (err) {
//         console.log('失败了')
//         return;
//     }
//     console.log('成功了')
// })

//文件移动
fs.rename('./data.txt', '../mp3/data.txt', err => {
    if (err) {
        console.log('失败了')
        return;
    }
    console.log('成功了')
})


// fs.renameSync(oldPath,newPath)
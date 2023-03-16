const fs = require('fs')

// 2.创建单个文件夹 mkdir 
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败')
//         reutrn
//     }
//     console.log('创建成功')
// })

//递归创建
// fs.mkdir('./html/a/b', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return;
//     }
//     console.log('创建成功')
// })

// 读取文件夹
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('读取失败')
//         return
//     }
//     console.log(data)
// })

//删除文件夹
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log(err)
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

//递归删除 
// 未来版本会移除
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log(err)
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log(err)
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})
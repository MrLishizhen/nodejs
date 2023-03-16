/*
复制:mp3文件夹的薛之谦-演员.mp3

*/


const fs = require('fs')
const process = require('process');
// // 方式一
// //读取文件内容
// let data = fs.readFileSync('../mp3/薛之谦 - 演员.mp3')
// //写入文件
// fs.writeFileSync('../mp3/薛之谦 - 演员-2.mp3', data)
// console.log(process.memoryUsage())
// {        
//     rss: 27901952, 看这个
//         heapTotal: 5541888,
//             heapUsed: 4908248,
//                 external: 6630229,
//                     arrayBuffers: 6292263
// }



// 方式二
//创建读取流对象
const rs = fs.createReadStream('../mp3/薛之谦 - 演员.mp3')
//创建写入对象
const ws = fs.createWriteStream('../mp3/薛之谦 - 演员-3.mp3')
//绑定 data事件
rs.on('data', chunk => {
    ws.write(chunk)
})

rs.on('end', () => {
    console.log(process.memoryUsage())
})
// {
//     rss: 28545024,
//         heapTotal: 5541888,
//             heapUsed: 5093184,
//                 external: 6761301,
//                     arrayBuffers: 6423335
// }
// rs.pipe(ws) //通道 ，不常用 但是效果和 上面的方式2一致
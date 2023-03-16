const fs = require('fs')

//创建读取流对象
const rs = fs.createReadStream('../mp3/薛之谦 - 演员.mp3');
//绑定data事件
rs.on('data', chunk => {
    console.log(chunk)
    console.log(chunk.length) //65536 字节 => 64KB
})

// 可选事件
res.on('end', () => {
    console.log('读取完成')
})
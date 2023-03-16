const fs = require('fs')
//异步追加
fs.appendFile('./座右铭.txt', ',择其善者而从之，则其不善者而改之', err => {
    if (err) {
        console.log('写入失败')
        return;
    }
    console.log('写入成功')
})

//同步追加
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新')


// fs.writeFile 实现追加
fs.writeFile('./座右铭.txt', 'love', { flag: 'a' }, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('成功了')
})
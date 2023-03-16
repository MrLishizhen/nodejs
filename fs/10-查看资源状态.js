const fs = require('fs')

fs.stat('../mp3/薛之谦 - 演员.mp3', (err, data) => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log(data);

    // isFile 查看是不是一个文件
    //isDirectory 查看是不是一个文件夹

    console.log(data.isDirectory())

})
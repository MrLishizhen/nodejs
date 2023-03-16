// 1.alloc
let buf = Buffer.alloc(10);
console.log(buf)
// < Buffer 00 00 00 00 00 00 00 00 00 00 >

// 2.allocUnsafe 创建速度快 但是内存空间中的数据不会归零
let buf_2 = Buffer.allocUnsafe(100000)
console.log(buf_2)

//3.form
let buf_3 = Buffer.from('hello')
let buf_4 = Buffer.from([105, 108, 111, 118])
console.log(buf_3)
// < Buffer 68 65 6c 6c 6f >
console.log(buf_4)
// < Buffer 69 6c 6f 76 >
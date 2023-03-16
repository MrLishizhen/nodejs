// 字符串转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_4.toString())
// // iloveyou utf-8

// // []
// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2)); //01101000
// buf[0] = 95;
// console.log(buf)


// 溢出
// let buf = Buffer.from('hello');
// buf[0] = 361 //舍弃高位的数字 0001 0110 1001 => 0110 1001
// console.log(buf);
// {/* <Buffer 69 65 6c 6c 6f > */ }

//中文
let buf = Buffer.from('你好');
{/* <Buffer e4 bd a0 e5 a5 bd></Buffer> */ }
console.log(buf)
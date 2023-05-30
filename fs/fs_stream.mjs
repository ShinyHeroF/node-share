import fs from 'node:fs';

const readableStream = fs.createReadStream('test.txt', {
  flags: 'r', // 文件的操作方式，同 file 中的配置一样，这里默认是可读的是 r
  encoding: 'utf-8', // 编码格式
  autoClose: true, // 是否关闭读取文件操作系统内部使用的文件描述符
  start: 0, // 开始读取的位置
  end: 5, // 结束读取的位置
  highWaterMark: 1 // 每次读取的个数
});
const writableStream = fs.createWriteStream('target.txt');
const writableStream2 = fs.createWriteStream('target2.txt',{encoding:'gbk'});

readableStream.on('open', () => {
  console.log('开始读取文件');
});

// readableStream.on('readable', () => {
//   //   readableStream.read()
//   let data;
//   console.log(readableStream.read());
  
//   // while ((data = readableStream.read()) !== null) {
//   //   console.log('还有新的数据');
//   // }

// });

// readableStream.on('data', (data) => {
//   console.log('读取到的数据:', data);
//   readableStream.pause();
//   console.log('There will be no additional data for 1 second.');
//   setTimeout(() => {
//     console.log('Now data will start flowing again.');
//     readableStream.resume();
//   }, 1000);
// });

readableStream.on('end', () => {
  console.log('文件全部读取完毕');
});

readableStream.on('close', () => {
  console.log('文件被关闭');
});

readableStream.on('error', (err) => {
  console.log('读取文件失败');
});
console.log('开始了');
readableStream.pipe(writableStream);
readableStream.pipe(writableStream2);
// readableStream.unpipe();
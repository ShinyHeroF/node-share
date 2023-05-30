// 飞书文档 https://qat1k1beyr.fs.cpic.com.cn/wiki/wikqmobKFDTGZQTYtxH89wCiKzf
// import fs from 'node:fs'

// fs.write(1, 'Hello', (err) => {
//     if (err) throw err;
//     console.log('File created!');
//     fs.close(1, (err) => {
//         if (err) throw err
//     })
// })

import { readFile, appendFile, rm } from 'node:fs/promises';
import fs from 'node:fs';

// promise
try {
  // const filePath = new URL('./test.txt', import.meta.url);
  // console.log('filePath ==>', filePath);
//   const contents = await readFile(filePath);
  // const contents = await readFile(filePath, { encoding: 'utf8' });
  // console.log(contents);

  // rm('./fs/xxx', {recursive:true})
} catch (err) {
  // console.error(err);
}

// callback
// var buf = new Buffer.alloc(3);
// fs.open('testd.txt', (err, fd) => {
//   if (err) throw err;
//   fs.read(fd, buf, {position:2,length:3}, (err, bytesRead, buffer) => {
//     if (err) throw err;
//     console.log('bytesRead ==>', bytesRead);
//     console.log('buffer ==>', buffer);

//     fs.close(fd);
//   });
// });
// fs.appendFile('test.txt', 'calback append!!\n', (err) => {
//   console.log('append error', err);
// })
fs.rm('xxx', {recursive:true}, (err) => {
  console.log('callback rm error ==>', err);
})
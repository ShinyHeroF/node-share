// index.js
// 读取map文件
const sourceMap = require('source-map');
const fs = require('fs');
const readFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, { encoding: 'utf-8' }, function (error, data) {
      if (error) {
        console.log(error);
        return reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};
// 调用originalPositionFor查找具体位置
async function searchSource(filePath, line, column) {
  const rawSourceMap = await readFile(filePath);
  const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
  const res = consumer.originalPositionFor({ line: line, column: column });
  console.log(res);
  return res;
}

searchSource('./528.584e45f8.js.map', 1, 71160);
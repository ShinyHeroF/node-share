// service.mjs
import { workerData, parentPort } from 'worker_threads';

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
// process.exit()
setTimeout(() => {
  parentPort.postMessage({ hello: workerData });
}, 800);
console.log('I am work!');
// throw new Error('aaa');
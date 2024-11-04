// index.js
// run with node --experimental-worker index.js on Node.js 10.x
import { Worker } from 'worker_threads';

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const filePath = new URL('./service.mjs', import.meta.url);
    const worker = new Worker(filePath, { workerData });
    // online is emitted whenever a worker
    // stops parsing the JavaScript code
    // and starts the execution.
    worker.on('online', () => {
      console.log('online!');
    });
    // worker.on('message', resolve);
    worker.on('message', (data) => {
      console.log('message ==>', data);
    });
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log('exit code ==>', code);
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
    // setTimeout(() => {
    //   worker.terminate();
    // }, 500);
  })
}

async function run() {
  const result = await runService('world')
  console.log(result);
}

run().catch(err => console.error('err =>', err))
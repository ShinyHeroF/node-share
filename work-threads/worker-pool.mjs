import { Worker,
  isMainThread,
  parentPort,
  setEnvironmentData,
  getEnvironmentData
} from 'worker_threads';

if (isMainThread) {
  const workerThreads = [];
  setEnvironmentData('Hello1', 1);
  for (let i = 0; i < 4; i++) {
    const filePath = new URL('./worker-pool.mjs', import.meta.url);
    setTimeout(() => {
      workerThreads.push(new Worker(filePath));
    }, i * 1000)
    
  }
  // Send a message to each worker thread with a task to perform
  workerThreads.forEach((worker, index) => {
    worker.postMessage({ task: index });
  });
} else {
  let a = getEnvironmentData('Hello1')
  setEnvironmentData('Hello1',  a + 1);
  let b = getEnvironmentData('Hello1')
  console.log('getEnvironmentData ==>', a, b);  // Prints 'World1!'.

  // parentPort.on('message', message => {
  //   console.log(`Worker ${process.pid}: Received task ${message.task}`);
  //   performTask(message.task);
  // });
  // function performTask(task) {
  //   console.log('task ==>', task);
  // }
}
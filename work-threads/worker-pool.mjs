import { Worker,
  isMainThread,
  parentPort,
  setEnvironmentData,
  getEnvironmentData
} from 'worker_threads';

if (isMainThread) {
  // Main thread code
  // Create an array to store worker threads
  const workerThreads = [];
  setEnvironmentData('Hello1', 'World1!');
  // Create a number of worker threads and add them to the array
  for (let i = 0; i < 4; i++) {
    const filePath = new URL('./worker-pool.mjs', import.meta.url);
    workerThreads.push(new Worker(filePath));
  }
  // Send a message to each worker thread with a task to perform
  workerThreads.forEach((worker, index) => {
    worker.postMessage({ task: index });
  });
} else {
  // Worker thread code
  console.log(getEnvironmentData('Hello1'));  // Prints 'World1!'.
  // Listen for messages from the main thread
  parentPort.on('message', message => {
    console.log(`Worker ${process.pid}: Received task ${message.task}`);
    performTask(message.task);
  });
  function performTask(task) {
    console.log('task ==>', task);
  }
}
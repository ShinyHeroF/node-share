import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} from 'node:worker_threads';

if (isMainThread) {
  setEnvironmentData('Hello1', 'World1!');
  setEnvironmentData('Hello2', 'World2!');
  setEnvironmentData('Hello3', 'World3!');
  const filePath = new URL('./set-environment.mjs', import.meta.url);
  const worker = new Worker(filePath);
} else {
  console.log(getEnvironmentData('Hello2'));  // Prints 'World!'.
}
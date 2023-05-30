import { readFile, appendFile, rm } from 'node:fs/promises';

try {
  rm('ddd', {recursive:true})
} catch (err) {
  console.error(err);
}
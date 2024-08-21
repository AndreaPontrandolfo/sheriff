import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const getLegacyCompatDirname = () => {
  const isESM = typeof import.meta !== 'undefined';
  return isESM ? dirname(fileURLToPath(import.meta.url)) : __dirname;
  // return url.fileURLToPath(new URL('.', isESM ? import.meta.url : __filename)); // alternative code
};

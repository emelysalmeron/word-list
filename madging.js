import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

import madge from 'madge';

const thing = path.join(__dirname, 'src', 'init', 'index.js');
console.log(thing);

madge(thing)
  .then((res) => res.image('image.svg'))
  // .then((res) => {
  //   fs.writeFile('./deps.svg', res.svg(), 'utf-8', (err) =>
  //     err ? console.error(err) : null
  //   );
  // })
  .catch(console.error);

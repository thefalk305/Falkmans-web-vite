import {readdir, readFile} from 'fs/promises';
const filesDir = '@/assets/img';

async function uniqueValues() {
  const files = await readdir(filesDir);
  const filesContent = await Promise.all(files.map((file) => {
    return readFile(filesDir + '/' + file, 'utf8');
  }));
  const arr = filesContent.reduce((acc, data) => {
    acc.push(data.toString().split('\n'))
    return acc;
  }, [])

  return new Set(arr);
}

uniqueValues().then((values) => {
  console.log(values);
})
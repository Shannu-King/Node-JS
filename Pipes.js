const fs=require('fs');
const zlib=require('zlib');
const gunzip=zlib.createGunzip();
const readStream=fs.createReadStream('./Example3.txt.gz');
const writeStream=fs.createWriteStream('Unknown.txt');
readStream.pipe(gunzip).pipe(writeStream);
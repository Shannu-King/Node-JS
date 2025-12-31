const fs=require('fs');
const writes=fs.createWriteStream('shannu.txt',{encoding:'utf-8'});
writes.write('Hello');
writes.end();
console.log("successfully completed");
// const reads=fs.createReadStream('')
const reads=fs.createReadStream('shannu.txt',{encoding:'utf-8'});
reads.on("data",(data)=>{
    console.log(data);
})
console.log("successfully Written");
const fs=require('fs');
const path=require('path');
fs.writeFileSync('./Shanmukh/example1.txt', '');
fs.writeFileSync('./Shanmukh/example2.txt', '');

fs.readdirSync('Shanmukh',(err,files)=>{
    if(err)
        throw err;
    else{
        for(let file of files)
            fs.unlink(path.join('./Shanmukh',file));
    }
});
fs.rmdir('./Shanmukh');
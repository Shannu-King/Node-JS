const fs = require('fs');
// fs.writeFile('Example.txt',"Hi This is Shanmukh",(err)=>
// {
//     if(err)
//         console.log(err);
//     else
//         console.log("data is written successfully");
//      fs.appendFile('Example.txt',' I am a web developer',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("data is appended successfully");
//     fs.readFile('Example.txt','utf8',(err,data)=>{
//      if(err)
//         console.log(err);
//     else
//         console.log(data);
//     fs.unlink('Example.txt',(err)=>
// {
//     console.log('File Deleted Sucessfully');
// });
   
// });


// });

// });
fs.unlink('Shanmukh/shanmukh1.txt',(err)=>
{ fs.unlink('Example.txt',(err)=>
 {
     console.log('File Deleted Sucessfully');
 });

})
fs.rmdir('Shanmukh',(err)=>
{
    if(err)
        console.log(err);
    else
        console.log("Folder Deleted Sucessfully");
});
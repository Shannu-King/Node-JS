const fs = require('fs');
const path = require('path');
// fs.mkdir('Shanmukh',(err)=>
// {
//     if(err)
//         console.log(err);
//     else
//         console.log("Folder Created Sucessfully");
//     fs.writeFile('Shanmukh/shanmukh1.txt','Hello',(err)=>
//     {
//         if(err)
//         console.log(err);
//     else
//         console.log("File Created Sucessfully");
//     })
    
// })



fs.rm('Shanmukh',{recursive:true,force:true},(err)=>
{
    if(err)
    console.log(
        err
    );
    else
        console.log("All removed Sucessfully");
})
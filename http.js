const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("Hi Main Domaim");
        res.end();
    }
    else{
        res.write("Other Domain");
        res.end();
    }
});
server.listen(3000);


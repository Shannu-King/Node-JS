const express = require('express');
const open = require('open').default;
const path=require('path');
const app = express();
const PORT = 3000;
app.use()
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/shannu/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name+" "+req.params.age)
});

app.listen(PORT, () => {
  console.log(`✅ Successfully running at http://localhost:${PORT}`);
 
});

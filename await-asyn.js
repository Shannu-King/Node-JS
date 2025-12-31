function getuserdetails(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll:"678"})
        },2000);
    }
);
}
const myfun=async()=>
{
    console.log("123");
    const result=getuserdetails("");
    console.log(result);
    console.log("345");
};
myfun();
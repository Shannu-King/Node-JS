function f1(a)
{
    return new Promise((resolve,reject)=>{
        let res=a+1;
        console.log("Result is:",res);
        resolve(res);
    });
}
function f2(b)
{
    return new Promise((resolve,reject)=>{
        let res1=b+1;
        console.log("Result is :",res1);
        resolve(res1);
    });
}
function f3(b)
{
    return new Promise((resolve,reject)=>{
        let res1=b+1;
        console.log("Result is :",res1);
        reject(res2);
    });
}
f1(10)
.then((r1)=>{
console.log("Value is:",c1);
return f2(r1);
})
.catch((err)=>{
console.log("Yes");
})
.then((r1)=>{
console.log("Res is",res1);
}
)
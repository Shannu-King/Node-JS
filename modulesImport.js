console.log("Customer A: File request received");
setTimeout(() => {
    console.log("Customer A: File read complete (5 sec)");
}, 5000); // slow task


console.log("Customer B: Database query request received");
setTimeout(() => {
    console.log("Customer B: Database query complete (3 sec)");
}, 3000); // medium task


console.log("Customer C: Quick message request received");
console.log("Customer C: Responded instantly!");
const {sum,str,components}=require('./ModulesExports');
console.log("Sum is:",sum(5,10));
console.log("String is:",str);
const obj=new components();             
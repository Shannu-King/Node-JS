const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let a=Math.floor(Math.random()*10)+1;
let b=Math.floor(Math.random()*10)+1;
let ans=a+b;
rl.question(`What is ${a}+${b} ?\n`,(answer)=>{
if(parseInt(answer)&&answer.trim()===ans){
    console.log("Correct Answer");
    rl.close();

}else{
    rl.setPrompt(`Incorrect Answer. Please try again.\n`);
    rl.prompt();
    rl.on('line',(answer)=>{
        if(parseInt(answer)===ans){
            console.log("Correct Answer");
            rl.close();
        }else{
            rl.setPrompt(`Incorrect Answer. Please try again.\n`);
            rl.prompt();
        }       
    });
}
});


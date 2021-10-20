var fs=require('fs');
fs.readFile('./content.md',(err,content)=>{
    console.log(err);
    console.log(content.toString());
})


let result=fs.readFileSync('./content.md','utf8');

let buff1=Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');


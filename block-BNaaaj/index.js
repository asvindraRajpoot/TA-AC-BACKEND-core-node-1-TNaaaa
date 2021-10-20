console.log('Welcome to Nodejs');

// // - require os module
// // - write code to get `number of cpu's, free memory, uptime and version from os module`
// // - write code to require only readFile and unlink method from fs module.
var os=require('os');

let cpus=os.cpus().length;
let freeMem=os.freemem();
let uptime=os.uptime();
let version=os.version();
console.log(cpus,freeMem,uptime,version);

var {readFile,unlink}=require('fs');


// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
// - write code to convert buffer back to string.
function createBuffer(){
    return Buffer.alloc(12);
}
function createUnsafeBuffer(){
    return Buffer.allocUnsafe(12);
}
let buff=createBuffer()
buff.write('Hello');
console.log(buff.toString());

// Q. Write code example to demonstrate blocking and non-blocking code.
//blocking code
for(let i=0;i<1000000;i++){
    
}


//Non blocking code
setTimeout(()=>{
    console.log('Hello from Non blocking code');
},1000);
// writeCode

// Create a http server and use readFile and createReadStream to read a file and send the data into response. 
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

var http=require('http');
var fs=require('fs');
// let server=http.createServer(handleRequestOnFile);
// function handleRequestOnFile(req,res){
//     res.setHeader('Content-Type','text/html');
//     fs.readFile('./node.html',(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.write(data);
//             res.end();
//         }
//     })
// }
let server=http.createServer(handleRequestOnStream);
function handleRequestOnStream(req,res){
    res.setHeader('Content-Type','text/html');
    fs.createReadStream('./node.html').pipe(res);
}


server.listen(5555,()=>{
    console.log('Server is listening at port 5555');
})
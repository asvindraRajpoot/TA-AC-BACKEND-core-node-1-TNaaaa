var http=require('http');
let server =http.createServer(handleRequest);
function handleRequest(req,res){
    console.log(req,res);
    res.end('Welcome to Server');
}
server.listen(4000,'localhost',()=>{
    console.log('Server has started listening...');
});
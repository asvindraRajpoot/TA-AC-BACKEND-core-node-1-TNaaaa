var http=require('http');
var fs=require('fs');
var url=require('url');

// create a server
let server =http.createServer(handleRequestAndResponse);
function handleRequestAndResponse(req,res){

    console.log(req,res);
    res.end('Welcome to NodeJs');

}
server.listen(3000,()=>{
    console.log('Server is listening at port 3000');
})
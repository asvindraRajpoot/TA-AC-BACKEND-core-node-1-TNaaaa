
// 1. create a basic server and listen on port 3000
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`

var http=require('http');
var server=http.createServer(handleRequest);
function handleRequest(req,res){
    console.log(req.headers);
    console.log(req.method);
    
}
server.listen(3000,()=>{
    console.log('Server is listening at port 3000');
})

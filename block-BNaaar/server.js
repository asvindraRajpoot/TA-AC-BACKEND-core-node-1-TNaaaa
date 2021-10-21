// writeCode

// Create a basic http server which is listening on port 5k 

// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.

var http=require('http');
var url=require('url');
let server=http.createServer(handleResponse);
function handleResponse(req,res){
  let parsedUrl=url.parse(req.url);
  let pathname=parsedUrl.pathname;
    console.log(req,res);
    if(req.method==='GET' && pathname==='/'){
        res.setHeader('Content-Type','text/plain')
        res.write('Welcome to homepage');
        res.end();
    }else if(req.method==='GET' && pathname==='/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<h2>this is all about NodeJs</h2>');
        res.end();
    }else if(req.method==='POST' && pathname==='/about'){
        res.setHeader('Content-Type','text/json')
        res.write('{message:this is a post request}');
        res.end();
    }

}

server.listen(3000,()=>{
    console.log('Server is listening at 3000');
})
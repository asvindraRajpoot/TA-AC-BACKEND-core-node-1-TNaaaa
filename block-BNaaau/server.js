// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object
var http=require('http');
var url=require('url');
let server=http.createServer(handleRequest);
// function handleRequest(req,res){
//     console.log(req,res);
// }
// server.listen(5000,()=>{
//     console.log('Server is listening at 5000 port');
// })

// Q. create a node server 
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

// function handleRequest(req,res){
//   res.setHeader('Content-Type','text/plain');
//   res.write('My First server in NodeJS');
//   res.end();
// }
// server.listen(5100,()=>{
//     console.log('Server is listening at 5100 port');
// })


// Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.
// function handleRequest(req,res){
//     res.setHeader('Content-Type','text/plain');

//     console.log(req.headers);
//     res.end(req.headers);
//   }
//   server.listen(5555,()=>{
//       console.log('Server is listening at 5555 port');
//   })

// Q. write code to create a node server 
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method
// function handleRequest(req,res){
//     res.setHeader('Content-Type','text/plain');

//     console.log(req.url,req.method);
//     res.end(req.url,req.method);
//   }
//   server.listen(5566,()=>{
//       console.log('Server is listening at 5566 port');
//   })

// Q. write code to create a node server 
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.
// function handleRequest(req,res){
//    res.setHeader('Content-Type','text/plain');

//     console.log(req.headers);
//     res.end();
//   }
//   server.listen(7000,()=>{
//       console.log('Server is listening at 7000 port');
//   })

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

// function handleRequest(req,res){
//    res.setHeader('Content-Type','text/plain');

//     res.statusCode=202;
//     res.end();
//   }
//   server.listen(3000,()=>{
//       console.log('Server is listening at 3000 port');
//   })

// Q. create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 


// function handleRequest(req,res){
//    res.setHeader('Content-Type','text/html');
 

    
//     res.end('<h3>Welcome to altcampus</h3>')
//   }
//   server.listen(8000,()=>{
//       console.log('Server is listening at 3000 port');
//   })

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

// function handleRequest(req,res){
  
 

//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end('<h3>Welcome to altcampus</h3>')
//   }
//   server.listen(8000,()=>{
//       console.log('Server is listening at 3000 port');
//   })

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})
// function handleRequest(req,res){
  
 

//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.write(res.json());
//     res.end()
//   }
//   server.listen(8888,()=>{
//       console.log('Server is listening at 3000 port');
//   })

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

// function handleRequest(req,res){

//     res.writeHead(200,{'Content-Type':'text/html'})
//     console.log(req.method);
//     res.end( `<h2>posted for first time</h2>`)
//   }
//   server.listen(5050,()=>{
//       console.log('Server is listening at 5050 port');
//   })

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

// function handleRequest(req,res){

//     if(req.method==='GET' && req.url==='/'){
//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end( `Asvindra Rajpoot`)
//     }else if(req.method==='GET' && req.url==='/about'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end( `<h2>Asvindra Rajpoot</h2>`)
//     }else{
//         res.writeHead(404,{'Content-Type':'text/html'})
//         res.end('route not found');
//     }
   
//   }
//   server.listen(2345,()=>{
//       console.log('Server is listening at 2345 port');
//   })

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

// function handleRequest(req,res){

//     if(req.method==='GET' && req.url==='/users'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end( `<form><input type='text'/><input type='email'/></form>`)
//     }else if(req.method==='POST' && req.url==='/users'){
//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end( `Posted for the second time`)
//     }else{
//         res.writeHead(404,{'Content-Type':'text/html'})
//         res.end('route not found');
//     }
   
//   }
//   server.listen(2345,()=>{
//       console.log('Server is listening at 2345 port');
//   })


// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params
function handleRequest(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    console.log(req.method);
  let parsedUrl= url.parse(req.url);
  console.log(parsedUrl.pathname);
  console.log(parsedUrl.query);


  
   
    res.end(`${parsedUrl.query}`);
  }
  server.listen(5050,()=>{
      console.log('Server is listening at 5050 port');
  })
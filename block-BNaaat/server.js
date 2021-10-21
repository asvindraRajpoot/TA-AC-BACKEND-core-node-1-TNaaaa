// writeCode

// Create a http server and use readFile and createReadStream to read a file and send the data into response. 
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

var http=require('http');
var fs=require('fs');
let server=http.createServer(handleRequest);
function handleRequest(req,res){
   

    if(req.url==='/files'){
        fs.readFile('./node.html',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.setHeader('Content-Type','text/html');
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url==='/stream'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./node.html').pipe(res);
    }else{
        res.end('Page not found');
    }
 
}


server.listen(5555,()=>{
    console.log('Server is listening at port 5555');
})
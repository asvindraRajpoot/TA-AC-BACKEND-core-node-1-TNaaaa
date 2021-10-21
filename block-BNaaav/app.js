var http =require('http');
var fs =  require('fs');
var url = require('url');

// /assets/images/logo/logo.png
// /assets/images/team/team_1.jpg
// /assets/images/team/team_2.jpg
// /assets/images/team/wetrusted.jpg
// /assets/images/cases/completed_case_2.png
// /assets/images/cases/completed_case_1.png
// /assets/images/testimonial/Homepage_testi.png
// /assets/images/recent/rcent_1.png
// /assets/images/recent/rcent_2.png
// /assets/images/recent/rcent_3.png
// /assets/images/logo/logo2_footer.png
// /assets/images/hero/h1_hero.jpg

// create a server
let server =http.createServer(handleRequestAndResponse);
function handleRequestAndResponse(req,res){
    console.log(req.url);

    if(req.method==='GET' && req.url==='/index.html'){
       
        //fs.createReadStream('./index.html').pipe(res);  
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.writeHead(202,{'Content-Type':'text/html'})
                res.end(data);
            }

        })

    }else if(req.method==='GET' && req.url==='/about.html'){
        fs.readFile('./about.html','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.writeHead(202,{'Content-Type':'text/html'})
                res.end(data);
            }

        })
        // check for css requests using url
    }else if (req.url.split(".").pop() === "css") {
      // set header for css file
      res.setHeader("Content-Type", "text/css");
      // read css file and send it in response
      fs.readFile("./assets/stylesheet/style.css", (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }

    else{
        res.end('Page not found');
    }
        
}
   


server.listen(3000,()=>{
    console.log('Server is listening at port 3000');
})
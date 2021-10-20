// Q. In server.js
// 1. require parse method from url core node module.
// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.
// 3. console query string from parsed url
// 4. console pathname
// 5. console protocol
// 6. use parse method from url module to parse query string as well.
var {parse}=require('url');
const parsedUrl=parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
let query=parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`,true);
console.log(query.query);
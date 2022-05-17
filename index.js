var http = require('http');
var fs = require('fs');
//拿到html页面
fs.readFile('./index.html', function (err, html) {
    if (err) throw err; 
    //监听在3000端口   
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});

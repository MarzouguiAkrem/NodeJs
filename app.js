const http = require('http');
const fs = require('fs')



const server = http.createServer((req,res)=> {
   
    const url = req.url
    const methode = req.method
    if(url=='/') {
        res.write('<html>')
        res.write('<head><title>My first page </title></head>')
        res.write('<body><form action="/message" method="POST" ><input type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()

    }
    if (url ==='/message' && methode === 'POST') {
        fs.writeFileSync('message.txt','Dummy')
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first page </title></head>')
    res.write('<body><h1>Hello from my nodeJs server</h1></body>')
    res.write('</html>')
    res.end()
   

});

server.listen(3000);


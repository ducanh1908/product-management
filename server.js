const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const qs = require('qs');
const url = require('url');


const configSQL = {
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'product_manager',
    charset : 'utf8_general_ci'
}

const connection = mysql.createConnection(configSQL);

function getProduct() {
    
}

connection.connect((err)=>{
    if(err) {
        console.log(err);
    }
    else
    {
        console.log('Connect Success!!');
    }
})

const server = http.createServer((req,res)=>{
    let urlParse = url.parse(req.url);
    let path = urlParse.pathname;
    

    switch(path) {
        case '/' : {
            fs.readFile('views/index.html','utf-8',(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.write(data);
                    res.end();
                }
            });
            break;
        }
        case '/product':{
            fs.readFile('views/products/list.html','utf-8',async (err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.write(data);
                    res.end();
                }
            });
            break;
        }
        case '/product/create': {

            break;
        }
        case '/product/edit': {

            break;
        }

        default :{
            fs.readFile('views/error-404.html','utf-8',(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;
        }
    }

    

})
server.listen(8080, ()=>{
    console.log('Server is running http://localhost:3000');
});

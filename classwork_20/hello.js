const http = require("http");
const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);


const requestListener = function (req, res) {
    // res.writeHead(200);
    // res.end("My first server!");

    // //json
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);
    // res.end(`{"message": "This is a JSON response"}`);

    // //csv
    // res.setHeader("Content-Type", "text/csv");
    // res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    // res.writeHead(200);
    // res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);

    // //html
    // res.setHeader("Content-Type", "text/html");
    // res.writeHead(200);
    // res.end(`<html><body><h1>This is HTML</h1></body></html>`);
    
    // //html-file
    // const fs = require('fs').promises;
    // fs.readFile(__dirname + "/index.html")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "text/html");
    //         res.writeHead(200);
    //         res.end(contents);
    //     })
    //     .catch(err => {
    //         res.writeHead(500);
    //         res.end(err);
    //         return;
    //     });

    //roots
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(books);
            break
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

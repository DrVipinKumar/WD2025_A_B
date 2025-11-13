const http = require("http");
const fs = require("fs");
const url = require('url');
const server = (req, res) => {
    // res.statusCode = 200;
    // res.setHeader({ "Content-Type": "text/html" });
    res.writeHeader(200, { "Content-Type": "text/html" })
    if (req.url === "/") {
        res.write("Welcome to Node JS by using HTTP Web Server");
        res.end();
    }
    if (req.url === "/about") {
        res.write("Create by Node JS")
        res.end();
    }
    if (req.url === "/rfile") {
        fs.readFile("indexPromise.js", "utf8", (error, data) => {
            if (error) {
                console.log(error)
            } else {
                res.write(`<pre>${data}</pre>`);
                res.end();
            }
        });
    }
    if (req.url === "/wfile") {
        let fileData = `This is my file data 
                            for wrinting new file in nodde js.
        `;
        fs.writeFile("data.txt", fileData, (error) => {
            if (error) {
                console.log(error)
            } else {
                res.write("File created! data.txt");
                res.end();
            }
        })
    }
    if (req.url === "/copyfile") {
        fs.copyFile("indexCallback.js", "file2.js", (error) => {
            if (error) {
                console.log(error)
            } else {
                res.write("File copied from indexCallback.js to file2.js!");
                res.end();
            }
        })
    }
    const filename = req.url.split('/')[2];
    if (req.url === `/delfile/${filename}`) {
        fs.unlink(filename, (error) => {
            if (error) {
                console.log(error)
            } else {
                res.write(`File deleted:${filename}`)
                res.end();
            }
        })
    }
    const paramQuery = url.parse(req.url, true);
    let dirname = paramQuery.query.dir;
    if (req.url === `/mkdir?dir=${dirname}`) {
        fs.mkdir(dirname,{recursive:true,force:true}, (error) => {
            if (error) {
                console.log(error)
            } else {
                res.write(`Directory created:${dirname}`)
                res.end();
            }
        })
    }

}
http.createServer(server)
    .listen(3000, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Web Server Running on port http://localhost:3000....");
        }
})
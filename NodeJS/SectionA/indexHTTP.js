const http = require("http");
const fs = require("fs");
const url = require("url");
const server = (req, res) => {
    res.writeHeader(200, { "Content-Type": "text/html" })
    if (req.url === "/") {
        res.write("Welcome to Node JS First App!");
        res.end();
    }
    if (req.url === "/about") {
        res.write("This is created by Node JS");
        res.end();
    }
    if (req.url === "/rfile") {
        fs.readFile("indexcallback.js", "utf8", (error,data) => {
            if (error) {
                console.log(error)
            } else {
                res.write(`<pre>${data}</pre>`)
                res.end();
            }
        })
    }
    if (req.url === "/wfile") {
        let fileData = `This is data for file named: 
                            file.text`;
        fs.writeFile("file.txt", fileData, (error) => {
            if (error) {
                console.log(error);
            }
            console.log(`Data inserted in file:file.txt"}`);
            res.write("Data inserted in file:file.txt");
            res.end();
        })        
    }
    if (req.url === "/cpFile") {
        fs.copyFile("indexpromise.js", "file2.js", (error) => {
            if (error) {
                console.log(error)
            }
            res.write("File indexpromise.js is copied to file2.js");
            res.end();
        })
    }
    let dirList = req.url.split("/").slice(2).join("/");
    console.log(dirList);
    if (req.url === `/mkdir/${dirList}`) {
        fs.mkdir(`${dirList}`, { recursive:true,force:true}, (error) => {
            if (error) {
                console.log(error);
            }
            res.write(`Directory created ${dirList}`);
            res.end();
        })
    }

    const queryInfo = url.parse(req.url, true);
        const fileName = queryInfo.query.fname;
    if (req.url === `/delfile?fname=${fileName}`) {        
        fs.unlink(`${fileName}`, (error) => {
            if (error) {
                console.log(error);
            }
            res.write(`File deleted ${fileName}`);
            res.end();
        })

    }
}

http.createServer(server).listen(3000, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Server running on http://localhost:3000");
    }
});
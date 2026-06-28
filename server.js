const http = require("http"), fs = require("fs"), path = require("path");
const port = process.env.PORT || 3000;
const mime = { ".html": "text/html", ".exe": "application/octet-stream", ".dat": "application/octet-stream" };
http.createServer((q, r) => {
  let p = q.url === "/" ? "/index.html" : q.url;
  let fp = path.join(__dirname, path.basename(p));
  if (fs.existsSync(fp)) {
    let ext = path.extname(fp);
    r.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
    r.end(fs.readFileSync(fp));
  } else {
    r.writeHead(404);
    r.end();
  }
}).listen(port, () => console.log("on " + port));

const http = require("http"), fs = require("fs"), path = require("path");
const port = process.env.PORT || 3000;
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
http.createServer((q, r) => {
  r.writeHead(200, { "Content-Type": "text/html" });
  r.end(html);
}).listen(port, () => console.log("on " + port));

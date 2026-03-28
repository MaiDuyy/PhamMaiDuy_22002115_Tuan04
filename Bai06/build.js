const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
fs.mkdirSync(distDir, { recursive: true });

const output = `
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Ung dung Node.js da duoc build bang multi-stage Dockerfile");
});

app.listen(port, () => {
  console.log(\`Server dang chay tai cong \${port}\`);
});
`.trimStart();

fs.writeFileSync(path.join(distDir, "server.js"), output);
console.log("Da tao dist/server.js");

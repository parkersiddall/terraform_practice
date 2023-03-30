const app = require("./app");
const http = require("http");
// const config = require("./utilities/config")

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
});

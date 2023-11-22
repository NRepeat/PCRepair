const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 5002;



server.listen(PORT, () => {
	console.log(`Server in docker started on port ${PORT}`);
});

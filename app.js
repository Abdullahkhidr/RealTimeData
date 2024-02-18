const app = require("express")();
const http = require("http").Server(app)
const io = require("socket.io")(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
    console.log("new client connected");
    socket.broadcast.emit("newClient", "Welcome To My Website")
});

http.listen(3000);
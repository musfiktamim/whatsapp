import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000"
  }
})

let users = []
const adduser = (userData, socketId) => {
  !users.some(user => user.sub == userData.sub) && (users.push({ ...userData, socketId }))
}
const getUser = (userId) => {
  return users.find(user => user.sub === userId)
}

io.on("connection", (socket) => {
  socket.on("addUser", userData => {
    adduser(userData, socket.id)
    io.emit("getuser", users)
  })
  socket.on("sendmessage", data => {
    const user = getUser(data.reveiverId)
    io.to(user.socketId).emit('getmessage', data)
  })
})
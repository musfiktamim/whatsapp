import express from "express";
const route = express.Router();
import UserControllers from "../controllers/User.controllers.js";

route.post("/adduser", UserControllers.addUser);
route.get("/alluser", UserControllers.alluser);

route.post("/conversation/add", UserControllers.conversationadd);
route.post("/conversation/get", UserControllers.conversationget);
route.post("/message/add", UserControllers.messageadd);
route.get("/message/get/:id", UserControllers.getMessages);

export default route;
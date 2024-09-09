import User from "../model/user.schema.js";

import Conversation from "../model/conversation.js";
import Message from "../model/message.js";

class UserControllers {
  //add user start
  static addUser = async (req, res) => {
    try {
      const { sub } = req.body
      const findUser = await User.findOne({ sub: sub })
      if (findUser) {
        return res.status(200).json({ msg: "user is already exist" })
      } else {
        const newUser = await new User(req.body)
        await newUser.save();
        return res.status(200).json({ msg: "user created", user: newUser })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  // add user end

  //all user start
  static alluser = async (req, res) => {
    try {
      const user = await User.find()
      if (user) {
        return res.status(200).json({ msg: "successfully", data: user })
      } else {
        return res.status(200).json({ msg: "successfully", data: "none" })
      }
    } catch (error) {
      return res.status(500).json({ msg: "field", message: error.message })
    }
  }
  // all user end

  // conversation start
  static conversationadd = async (req, res) => {
    const { senderId, receiverId } = req.body
    try {
      const isexist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
      if (isexist) {
        return res.status(200).json('conversation already exist');
      } else {
        const newConversation = new Conversation({
          members: [senderId, receiverId]
        })
        await newConversation.save();
        return res.status(200).json('conversation saved successfully')
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  //conversation end

  // Conversation get start
  static conversationget = async (req, res) => {
    const { senderId, receiverId } = req.body
    try {
      let conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } })
      return res.status(200).json(conversation)
    } catch (error) {
      return res.status(5000).json(error.message)
    }
  }
  //conversation get end

  //message add start

  static messageadd = async (req, res) => {
    try {
      const newMessage = await new Message(req.body);
      await newMessage.save()
      await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })
      return res.status(200).json("message has been send successfull")
    } catch (error) {
      return res.status(5000).json(error.message)
    }
  }

  //message add end

  //get message start

  static getMessages = async (req, res) => {
    try {
      const messages = await Message.find({
        conversationId: req.params.id
      })
      return res.status(200).json(messages)
    } catch (error) {

      return res.status(5000).json(error.message)
    }
  }

  //get message end
  //file uploade start

  //file uploade end

}

export default UserControllers
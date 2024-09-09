import { Box, styled, useForkRef } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import { accountC } from "../../../contextapi/AccountContext"
import { getMessages, newMessage } from '../../../service/Api'
import { Person } from '@mui/icons-material'
import Messages from './Messages'
import { toast } from "react-hot-toast"

const Wrapper = styled(Box)`
  background-image:url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size:55%;
`

const Component = styled(Box)`
  height:80vh;
  overflow-y:auto;
`

const Container = styled(Box)`
  padding:5px 80px;
`

function Message({ user, conversation }) {
  const { account, socket } = useContext(accountC)
  const [incomingMessage, setIncomingMessage] = useState(null)
  const [Text, setText] = useState("")
  const [message, setMessage] = useState(null)
  const [file, setFile] = useState(null)
  useEffect(() => {
    socket.current.on("getmessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  })

  useEffect(() => {
    const getMessagess = async () => {
      let data = await getMessages(conversation._id)
      setMessage(data)
    }
    getMessagess()
  }, [user._id, conversation._id, message])

  const scroller = useRef()

  useEffect(() => {
    scroller.current?.scrollIntoView({ transition: "smooth" })
  }, [message])

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setMessage(prev => [...prev, incomingMessage])
  }, [incomingMessage, conversation])

  async function sendtext(e) {
    const code = e.which;
    if (code === 13) {
      if (Text) {

        let message = {
          senderId: account.sub,
          receiverId: user.sub,
          conversationId: conversation._id,
          type: "text",
          text: Text
        }

        socket.current.emit('sendmessage', message)

        await newMessage(message)
        setText("")
      } else {
        toast.error("please write", { duration: 800, position: "top-center" })
      }
    }
  }


  return (
    <Wrapper>
      <Component>
        {
          message && message.map((message) => (
            <Container ref={scroller}>
              <Messages message={message} />
            </Container>
          ))
        }
      </Component>
      <Footer sendtext={sendtext} setText={setText} text={Text} file={file} setFile={setFile} />
    </Wrapper>
  )
}

export default Message
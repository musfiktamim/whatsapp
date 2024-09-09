import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeaders from './ChatHeaders'
import Message from './Message'
import Footer from './Footer'
import { getConversation } from "../../../service/Api"
import { accountC } from '../../../contextapi/AccountContext'

function ChatBox() {
  const { person, account } = useContext(accountC)

  const [conversation, setConversation] = useState({})

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub })
      setConversation(data)
    }
    getConversationDetails()
  }, [person.sub])
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeaders user={person} />
      <Message user={person} conversation={conversation} />
    </Box>
  )
}

export default ChatBox
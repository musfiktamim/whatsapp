import React, { useContext, useEffect, useState } from 'react'
import { getuser } from '../../../service/Api'
import { Box, Divider, styled } from '@mui/material'
import Conversation from './Conversation'
import { accountC } from "../../../contextapi/AccountContext"

const Component = styled(Box)`
height:81vh,
overflow:overlay
`
const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background:#e9edef;
  opacity:0.6;
`

function Conversations({ text }) {
  const { account, socket, setUsers } = useContext(accountC)
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getuser()
      const filterd = res.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()))
      setUser(filterd)
    }
    fetchData()
  }, [text])

  useEffect(() => {
    socket.current.emit("addUser", account)
    socket.current.on('getuser', (data) => {
      setUsers(data)
    })
  }, [account])

  return (
    <Component>
      {
        user.map((user) =>
          user.sub !== account.sub && <>
            <Conversation user={user} />
            <StyleDivider />
          </>
        )
      }
    </Component>
  )
}

export default Conversations
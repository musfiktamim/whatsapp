import { Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import { accountC } from '../../../contextapi/AccountContext'
import { setConversation } from '../../../service/Api'

const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`
const Image = styled("img")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover"
})


function Conversation({ user }) {
  const { setPerson, account } = useContext(accountC)
  async function getUser() {
    setPerson(user)
    await setConversation({ senderId: account.sub, receiverId: user.sub })
  }

  return (
    <Component onClick={getUser}>
      <Box>
        <Image src={user.picture} alt="" />
      </Box>
      <Box>
        <Box>{user.name}</Box>
      </Box>
    </Component>
  )
}

export default Conversation
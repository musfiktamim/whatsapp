import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import Menus from './menu/Menus'
import EmptyChat from './emptychat/EmptyChat'
import SearchComp from './searchcompo/SearchComp'
import ChatBox from './emptychat/ChatBox'
import { accountC } from '../../contextapi/AccountContext'

const dialogStyle = {
  height: '95%',
  marginTop: "20px",
  width: '100%',
  maxWidth: "100%",
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  borderRadius: 0
}
const Component = styled(Box)`
  display:flex
`

const LeftConp = styled(Box)`
min-width:450px
`
const RightConp = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgb(0,0,0,1.14);
`

function Chatdialog() {
  const { person } = useContext(accountC);
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop maxWidth={"md"}>
      <Component>
        <LeftConp>
          <Menus />
        </LeftConp>
        <RightConp>
          {
            Object.keys(person).length !== 0 ? <ChatBox /> : <EmptyChat />
          }
        </RightConp>
      </Component>
    </Dialog>
  )
}

export default Chatdialog
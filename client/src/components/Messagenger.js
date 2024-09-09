import React, { useContext } from 'react'
import Login from './Login'
import { AppBar, Box, Toolbar, styled } from "@mui/material"
import { accountC } from '../contextapi/AccountContext'
import Chatdialog from './chatdialog/Chatdialog'

const Header = styled(AppBar)`
  height: 175px;
  background:#00bfa5;
  box-shadow:none;
`
const Component = styled(Box)`
  height:100vh;
  background-color:#DCDCDC;
`

const ChatHeader = styled(AppBar)`
  height: 125px;
  background:#00A884;
  box-shadow:none;
`


function Messagenger() {
  const { account } = useContext(accountC)
  return (
    <Component>
      {
        account ?
          <>
            <ChatHeader>
              <Toolbar>

              </Toolbar>
            </ChatHeader>
            <Chatdialog />
          </>
          :
          <>
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <Login />
          </>
      }

    </Component>
  )
}

export default Messagenger
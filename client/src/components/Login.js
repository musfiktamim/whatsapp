import { Box, Dialog, List, ListItem, Typography, listClasses, styled } from '@mui/material'
import React, { useContext } from 'react'
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { accountC } from '../contextapi/AccountContext'
import { addUser } from '../service/Api'


const Component = styled(Box)`
  display:flex;
`

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`

const QrCode = styled('img')({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px"
})

const Title = styled(Typography)`
  font-size:26px;
  color:#525252;
  font-weight:300,
  font-family:inherit;
  margin-bottom:30px;
`
const Stylelist = styled(List)`
  &>li{
  padding:0,
  margin-top:15px;
}
`

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: "100%",
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
}


function Login() {

  const { setAccount } = useContext(accountC)
  async function LoginSuccess(res) {
    const decoded = jwtDecode(res.credential)
    setAccount(decoded);
    await addUser(decoded);
  }
  function LoginError() {
    console.log("error")
  }
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop>

      <Component>
        <Container>
          <Title>
            To use whatsApp ib your computer:
          </Title>
          <Stylelist>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap menu Settings and sekect web</ListItem>
            <ListItem>3. Point your phone to this screen to copture the code</ListItem>
          </Stylelist>
        </Container>
        <Box style={{ position: "relative" }}>
          <QrCode src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg' alt='qr code' />
          <Box style={{ position: "absolute", top: "50%", transform: "translateX(25%)" }}>
            <GoogleLogin onSuccess={LoginSuccess} onError={LoginError} />
          </Box>
        </Box>
      </Component>


    </Dialog>
  )
}

export default Login
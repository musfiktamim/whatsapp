import { Box, Container, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { accountC } from '../../contextapi/AccountContext'


const ImageContainer = styled(Box)`
  display:flex;
  justify-content:center;
`;

const Image = styled("img")({
  height: "180px",
  width: "180px",
  borderRadius: "50%",
  padding: "25px 0"
})

const BoxWraper = styled(Box)`
background:#fff;
padding:12px 30px 2px;
box-shadow:0px 1px 2px rgb(0,0,0,0.08);
& :first-child{
font-size:13px;
color:#009688;
font-weight:200;
}
& :last-child{
margin:14px 0;

}
`
const DescriptionContainer = styled(Box)`
padding:15px 20px 28px 30px;
& > p{
font-size:13px;
color:#8696a0;
}
`

function Profile() {
  const { account } = useContext(accountC)
  return (
    <>
      <ImageContainer><Image src={account.picture} alt="dp" /></ImageContainer>
      <BoxWraper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWraper>
      <DescriptionContainer>
        <Typography>This is not your username or pin. This name will be visible whatsApp contact.</Typography>
      </DescriptionContainer>
      <BoxWraper>
        <Typography>About</Typography>
        <Typography>Slepp! code !</Typography>
      </BoxWraper>
    </>
  )
}

export default Profile
import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography, styled, typographyClasses } from '@mui/material'
import React from 'react'

const Header = styled(Box)`
height:44px;
background:#EDEDED;
padding:8px 16px;
display:flex;
align-items:center;
`

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
})

const Name = styled(Typography)`
  padding-left:12px !important;
`
const Status = styled(Typography)`
padding-left:12px !important;
font-size:12px;
color:rgb(0,0,0,0.6)
`
const RightContainer = styled(Box)`
  margin-left:auto;
  & > svg{
    padding:8px;
    font-size:24px;
    color:#000;
  }
`

function ChatHeaders({ user }) {
  return (
    <Header>
      <Image src={user.picture} alt='dp' />
      <Box>
        <Name>{user.name}</Name>
        <Status>status</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  )
}

export default ChatHeaders
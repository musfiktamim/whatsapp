import React from 'react'
import { Box, Drawer, Typography, styled } from "@mui/material"
import zIndex from '@mui/material/styles/zIndex'
import { ArrowBack } from '@mui/icons-material'
import Profile from './Profile'

const DrowerStyle = {
  // top: "20%",
  left: 30,
  top: 12,
  height: "95%",
  width: '30%',
  boxShadow: "none"
}

const Header = styled(Box)`
  background:#008069;
  height:110px;
  color:#fff;
  display:flex;
  &>svg ,&>p{
  margin-top:auto;
  padding:15px;
  font-weight:600;
  }
`

const Component = styled(Box)`
  background:#ededed;
  height:85%;
`


function InfoDrower({ open, setOpen }) {
  function handleClick() {
    setOpen(null)
  }
  return (
    <Drawer open={open} onClose={handleClick} hideBackdrop={false} PaperProps={{ sx: DrowerStyle }} style={{ zIndex: 100000000 }}>

      <Header>
        <ArrowBack onClick={() => setOpen(null)} />
        <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  )
}

export default InfoDrower
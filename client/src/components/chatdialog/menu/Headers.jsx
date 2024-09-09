import { Box, Icon, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Chat, Message, MoreVert, ThreeDRotation } from "@mui/icons-material"
import { accountC } from '../../../contextapi/AccountContext'
import Headermenu from './Headermenu'
import InfoDrower from '../../drower/InfoDrower'

const Component = styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
})

const Wraper = styled(Box)`
margin-left:auto;
& > *{
  margin-left:2px;
  padding:8px;
  color:#000;
  &:first-child{
  font-size:27px;
  margin-right:auto;
  }
}
`

function Headers() {
  const { account } = useContext(accountC)
  const [open, setOpen] = useState(false)
  return (
    <>
      <Component>
        <Image src={account.picture} alt="account profile" onClick={() => setOpen(true)} />
        <Wraper>
          <ThreeDRotation />
          <Message />
          <Headermenu />
        </Wraper>

      </Component>
      <InfoDrower open={open} setOpen={setOpen} />
    </>
  )
}

export default Headers
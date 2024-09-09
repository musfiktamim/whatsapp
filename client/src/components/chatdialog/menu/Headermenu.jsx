import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'

const MenuI = styled(MenuItem)`
font-size:13px;
padding:15px 60px 5px 24px;
color:#4A4A4A;  
`

function Headermenu() {
  const [opened, setOpened] = useState(null)
  function handleClose() {
    setOpened(null)
  }
  function handleClick(e) {
    setOpened(e.currentTarget)
  }
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        keepMounted
        anchorEl={opened}
        open={opened}
        onClose={handleClose}
        getContentAnchorE1={false}
        anchorOrigin={
          {
            vertical: "bottom",
            horizontal: "center"
          }
        }
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuI onClick={handleClose}>New group</MenuI>
        <MenuI onClick={handleClose}>Archived</MenuI>
        <MenuI onClick={handleClose}>Starred message</MenuI>
        <MenuI onClick={handleClose}>Settings</MenuI>
        <MenuI onClick={handleClose}>Log out</MenuI>
      </Menu>
    </>
  )
}

export default Headermenu
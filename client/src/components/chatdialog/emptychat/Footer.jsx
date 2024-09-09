import { AttachFile, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { Box, InputBase, TextField, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { uplodeFile } from '../../../service/Api'

const Component = styled(Box)`
  height:55px;
  background:#ededed;
  display:flex;
  align-items:center;
  padding:0 15px;
  & > * {
   margin 5px;
   color:#919191;
  }
`
const Inputs = styled(Box)`
  background-color:#fff;
  border-radius:6px;
  width:calc(94%);
`

const Input = styled(InputBase)`
  width:100%;
  padding:20px;
  height:20px;
  padding-left:25px;
  font-size:14px;
`
const AthchFile = styled(AttachFile)`
  transform:rotate(40deg);
`


function Footer({ sendtext, setText, text, file, setFile }) {


  useEffect(() => {
    const setImage = async () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)
        await uplodeFile(data)
      }
    }
  }, [file])

  function handleChange(e) {
    setFile(e.target.files[0])
    setText(e.target.files[0].name)
  }

  return (
    <Component>
      <EmojiEmotionsOutlined />
      <label htmlFor="infile">
        <AthchFile />
      </label>

      <input type="file" id='infile' style={{ display: "none" }} onChange={handleChange} />
      <Inputs>
        <Input placeholder='Type A Message...' value={text} onChange={(e) => setText(e.target.value)} onKeyPress={sendtext} />
      </Inputs>
      <Mic />
    </Component>
  )
}

export default Footer
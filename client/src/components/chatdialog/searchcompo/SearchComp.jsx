import { Search } from '@mui/icons-material'
import { Box, InputBase, TextField, styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
  background:#fff;
  height:45px;
  border-bottom: 2px solid #F2F2F2;
`

const Wrapper = styled(Box)`
  background-color:#f0f2f5;
  position:relative;
  margin:0 13px;
  wdith:450px;
  display:flex;
  align-items:center;
  border-radius:10px;
  height:100%;
  margin-top:2px;
`
const Icons = styled(Box)`
  position:absolute;
  height:100%;
  color:#919191;
  padding:6px;
  z-index:2;
  display:flex;
  align-items:center;
`
const InputFiel = styled(InputBase)`
height:50px;
padding-left:65px;
width:90%;
`

function SearchComp({ setText }) {

  return (
    <Component>
      <Wrapper>
        <Icons>
          <Search />
        </Icons>
        <InputFiel
          placeholder='Search or start new chat'
          onChange={e => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  )
}

export default SearchComp
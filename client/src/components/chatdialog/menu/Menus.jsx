import React, { useState } from 'react'
import Headers from './Headers'
import { useContext } from 'react'
import SearchComp from '../searchcompo/SearchComp'
import { styled } from '@mui/material'
import Conversations from './Conversations'



function Menus() {
  const [text, setText] = useState("")
  return (
    <>
      <Headers />
      <SearchComp setText={setText} />
      <Conversations text={text} />
    </>
  )
}

export default Menus
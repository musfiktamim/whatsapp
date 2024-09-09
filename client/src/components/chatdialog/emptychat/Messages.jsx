import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { accountC } from '../../../contextapi/AccountContext'

const Own = styled(Box)`
  background: #dcf8c6;
  max-width:60%;
  margin-left:auto;
  padding:5px;
  width:fit-content;
  display:flex;
  border-radius: 5px;
  word-break:break-word;
`
const Wrapper = styled(Box)`
  background: #ffffff;
  max-width:60%;
  margin-right:auto;
  padding:5px;
  width:fit-content;
  display:flex;
  border-radius: 5px;
  word-break:break-word;
`

const Left = styled(Typography)`
  font-size:14px;
  padding:0 25px 0 5px;
`
const Time = styled(Typography)`
  font-size:10px;
  color:#919191;
  margin-top:auto;
  word-break:keep-all;
`


function Messages({ message }) {
  const { account } = useContext(accountC)
  function times(data) {
    const hours = new Date(data).getHours()
    const minutes = new Date(data).getMinutes()
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
  }
  const time = times(message.createdAt)
  return (
    <>
      {
        account.sub == message.senderId ?
          <Own>
            <Left>
              {message.text}
            </Left>
            <Time>{time}</Time>
          </Own>
          :
          <Wrapper>
            <Left>
              {message.text}
            </Left>
            <Time>{time}</Time>
          </Wrapper>

      }
    </>
  )
}

export default Messages
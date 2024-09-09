import axios from "axios";

const url = 'http://localhost:4000'


export async function addUser(data) {
  try {
    await axios.post(`${url}/adduser`, data)
  } catch (error) {
    console.log(error.message)
  }
}

export async function getuser() {
  const res = await axios.get(`${url}/alluser`)
  return res.data.data;
}

export async function setConversation(data) {
  try {
    await axios.post(`${url}/conversation/add`, data)
  } catch (error) {
    console.log(error.message)
  }
}

export async function getConversation(data) {
  try {
    let res = await axios.post(`${url}/conversation/get`, data)
    return res.data
  } catch (error) {
    console.log(error.message)
  }
}

export async function newMessage(data) {
  try {
    await axios.post(`${url}/message/add`, data)
  } catch (error) {
    console.log(error.message)

  }
}

export async function getMessages(data) {
  try {
    const messages = await axios.get(`${url}/message/get/${data}`)
    return messages.data
  } catch (error) {
    console.log(error.message)

  }

}


export async function uplodeFile(data) {
  try {
    return await axios.post(`${url}/file/upload`, data)
  } catch (error) {
    console.log(error.message)
  }
}
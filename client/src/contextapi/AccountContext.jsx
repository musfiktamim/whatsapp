import { createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client'

export const accountC = createContext(null);

function Account_provider({ children }) {
  const [account, setAccount] = useState()
  const [person, setPerson] = useState({})
  const [users, setUsers] = useState(null)
  console.log(users)
  const socket = useRef()
  useEffect(() => {
    socket.current = io("ws://localhost:9000")
  }, [])
  return (
    <accountC.Provider value={{ account, setAccount, person, setPerson, socket, users, setUsers }}>
      {children}
    </accountC.Provider>
  )
}




export default Account_provider
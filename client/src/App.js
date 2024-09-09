import React from 'react'
import Messagenger from './components/Messagenger'
import { GoogleOAuthProvider } from "@react-oauth/google"
import Account_provider from './contextapi/AccountContext'
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <Account_provider>
      <Toaster />
      <GoogleOAuthProvider clientId='860323969146-2qp7nll5scfsn5j49e6etdva86knq7d2.apps.googleusercontent.com'>
        <Messagenger />
      </GoogleOAuthProvider>
    </Account_provider>
  )
}

export default App
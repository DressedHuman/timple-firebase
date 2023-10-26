import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { createContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { app } from './firebase/firebase.config'

// global context
export const userContext = createContext();
// main App() component
function App() {
  const [user, setUser] = useState(null); //user log state
  const auth = getAuth(app);
  const providerGoogle = new GoogleAuthProvider();

  const handleSignIn = (provider) => {
    signInWithPopup(auth, provider)
    .then(result=>setUser(result.user))
    .catch(error=>console.log(error.message))
  }

  const handleSignOut = () => {
    console.log("signing you out!");
    signOut(auth)
    .then(() => setUser(null))
    .catch(error=>console.log("signout error : ", error.message))
  }

  return (
    <>
      <userContext.Provider value={{ user, setUser, handleSignIn, handleSignOut, providerGoogle }}>
        <Header />
        <main className='py-7 px-12 text-center'>
          <Outlet />
        </main>
      </userContext.Provider>
    </>
  )
}

export default App

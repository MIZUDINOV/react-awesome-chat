import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Authentication } from './Authentication'
import { ChatRoom } from './ChatRoom'
import { auth } from './firebase'

function App() {
  const [name, setName] = React.useState('')
  const [user] = useAuthState(auth)

  const onSetName = (e) => {
    setName(e.target.value)
  }

  const signInAnonymously = async () => {
    await auth.signInAnonymously()
  }

  const onChangeDisplayName = async () => {
    await auth.currentUser.updateProfile({ displayName: name })
    setName('')
  }

  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        height: '100vh',
        display: 'flex',
      }}
    >
      {!!user?.displayName ? (
        <ChatRoom />
      ) : (
        <Authentication
          onSetName={onSetName}
          signInAnonymously={signInAnonymously}
          onChangeDisplayName={onChangeDisplayName}
          user={user}
          name={name}
        />
      )}
    </div>
  )
}

export default App

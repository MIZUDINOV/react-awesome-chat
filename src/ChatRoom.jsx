import React from 'react'

import { Button, TextField, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { auth, firestore } from './firebase'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from './ChatMessage'

export const ChatRoom = () => {
  const [text, setText] = React.useState('')

  const scroll = React.useRef()

  const messageRef = firestore.collection('messages')
  const query = messageRef.orderBy('createdAt').limit(30)

  const [messages] = useCollectionData(query, { idField: 'id' })

  const onSendMessage = async (e) => {
    e.preventDefault()

    const { uid, displayName } = auth.currentUser

    await messageRef.add({
      text,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: displayName,
    })

    setText('')
    scroll.current.scrollIntoView({ behavoir: 'smooth' })
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: '15px',
          height: '50px',
        }}
      >
        <Typography variant='h5' component='h5'>
          {auth.currentUser.displayName}
        </Typography>
        <Button
          onClick={() => auth.signOut()}
          color='primary'
          variant='outlined'
        >
          Выйти
        </Button>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography color='primary' variant='h4' component='h4'>
          Чат
        </Typography>
        <div
          style={{
            width: '100%',
            minHeight: '300px',
            maxHeight: '100%px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} {...msg} />)}
          <div ref={scroll}></div>
        </div>
        <form
          onSubmit={onSendMessage}
          style={{
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TextField
            style={{ width: '92%' }}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='сообщение...'
            variant='outlined'
          />

          <Button type='submit' disabled={!text}>
            <SendIcon color='primary' fontSize='large' />
          </Button>
        </form>
      </div>
    </>
  )
}

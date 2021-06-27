import { Avatar, Typography } from '@material-ui/core'
import React from 'react'
import { auth } from './firebase'

export const ChatMessage = ({ text, uid, name }) => {
  const messageClass = uid === auth.currentUser.uid
  return (
    <div
      style={
        messageClass
          ? {
              padding: '10px 15px',
              marginBottom: '25px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row-reverse',
            }
          : {
              padding: '10px 15px',
              marginBottom: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }
      }
    >
      <Avatar
        style={messageClass ? { marginLeft: '20px' } : { marginRight: '20px' }}
      >
        {name.slice(0, 1)}
      </Avatar>
      <div
        style={
          messageClass
            ? {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }
        }
      >
        <Typography>{name}</Typography>
        <Typography
          style={
            messageClass
              ? {
                  backgroundColor: '#008dd0',
                  padding: '10px',
                  borderRadius: '13px',
                  color: 'white',
                }
              : {
                  backgroundColor: '#8ec0d8',
                  padding: '10px',
                  borderRadius: '13px',
                  color: 'white',
                }
          }
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

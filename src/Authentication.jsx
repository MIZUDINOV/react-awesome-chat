import React from 'react'

import { Button, TextField, Typography } from '@material-ui/core'

export const Authentication = ({
  onSetName,
  signInAnonymously,
  onChangeDisplayName,
  user,
  name,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
        width: '100%',
      }}
    >
      <Typography
        style={{ marginBottom: '25px' }}
        variant='h5'
        component='h3'
        align='center'
      >
        {user
          ? 'Введите отображаемое имя в чате'
          : 'Вы можете войти в чат используя анонимный аккаунт'}
      </Typography>
      {user ? (
        <TextField
          onChange={onSetName}
          value={name}
          placeholder='Логин'
          style={{ marginBottom: '25px' }}
          variant='outlined'
        />
      ) : null}
      <Button
        onClick={user ? onChangeDisplayName : signInAnonymously}
        color='primary'
        variant='contained'
        align='center'
        size='large'
        disabled={user ? !name : false}
      >
        {user ? 'Войти' : 'Создать'}
      </Button>
    </div>
  )
}

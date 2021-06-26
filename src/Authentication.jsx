import { Button, createStyles, Typography } from '@material-ui/core'
import React from 'react'

export const Authentication = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <Typography
        style={{ marginBottom: '25px' }}
        variant='h5'
        component='h3'
        align='center'
      >
        Вы можете войти в чат используя анонимный аккаунт
      </Typography>
      <Button color='primary' variant='contained' align='center'>
        Войти
      </Button>
    </div>
  )
}

import React from 'react'
import '../styles/TweetBox.css'
import { Avatar, Button } from '@mui/material'

const TweetBox = () => {
  return (
    <div className='tweetbox'>
      <form action="">
        <div className='tweetbox__input'>
            <Avatar src='./assets/gym logo.jpg' />
            <input type="text" placeholder='what is happening?' />

        </div>
        <Button className='tweetbox__tweetbutton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox

import React from 'react'
import '../styles/Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = (displayName, userName, verified, text, image, avatar) => {
    // displayName,
    // userName,
    // verified,
    // text,
    // image,
    // avatar
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src="./Assets/logo.jpg"/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
            <div className="post__headertext">
                <h3>
                    {displayName.displayName} {''}
                    <span className='post__headerspecial'>
                         <VerifiedIcon className='post__badge'/>
                        @jekwejoseph
                    </span>
                </h3>
            </div>
            <div className='post__headerdescription'>
                <p>i be boss</p>
            </div>
            
        </div>
        <img src='./assets/gym3.jpg' alt='' />
        <div className="post__footer">
            <ChatBubbleIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>


        </div>
      </div>
    </div>
  )
}

export default Post

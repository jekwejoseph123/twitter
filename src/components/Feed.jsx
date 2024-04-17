import React, { useState } from 'react'
import '../styles/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'


const Feed = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className='feed'>
      
     <div className='feed__header'>
     <h2>Home</h2>
     </div>


      
      <TweetBox/>

      
      <Post displayName="jekwejoseph" userName="jeksss" verified={true} text="God is good" avatar='./assets/gym logo.jpg' image="./assets/gym3.jpg"/>
      <Post/>
      <Post/>
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Feed

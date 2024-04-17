import React from 'react'
import '../styles/Widgets.css'
import {
  TwitterTimelineEmbed,
  // XSharebutton,
  // XShareButton,
  // XTweetEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';


const Widgets = () => {
  return (
    <div className='widgets'>
      
      <div className="widgets__input">
        <SearchIcon className='widgets__searchicon'/>
        <input type="text" placeholder='search X' />


      </div >

      <div className='widgets__widgetcontainer'>
        <h2>what's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"}/>

        <TwitterTimelineEmbed sourceType="profile" screenName="joseph" options={{height: 400}} />

        <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}  options={{text: "#reactjs is awesome",  via: "joseph"}}/>
      </div>

    </div>
  )
}

export default Widgets

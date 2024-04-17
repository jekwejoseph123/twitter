import React from 'react'
import '../styles/Sidebar.css'
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';







const Sidebar = () => {
  return (
    <div className='sidebar'>
        
        <XIcon className='sidebar__twitterIcon'/>

        <SidebarOption Icon={HomeIcon} text='home'/>
        <SidebarOption Icon={SearchIcon} text='explore'/>
        <SidebarOption Icon={NotificationsIcon} text='notifications'/>
        <SidebarOption Icon={MailOutlineIcon} text='messages'/>
        <SidebarOption Icon={BookmarkBorderIcon} text='bookmarks'/>
        <SidebarOption Icon={ListAltIcon} text='lists'/>
        <SidebarOption Icon={PermIdentityIcon} text='profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='more'/>

        {/* button=>Tweet */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>

        

      
      
    </div>
  )
}

export default Sidebar

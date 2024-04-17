import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import SidebarOption from './components/SidebarOption';
import Feed from './components/Feed';
import Widgets from './components/Widgets';



function App() {
  return (
    <div className="App">
      

      
      <Sidebar/>
      



      

      {/* feed */}
      <Feed/>

      {/* widgets */}
      <Widgets/>

      
    </div>
  );
}

export default App;

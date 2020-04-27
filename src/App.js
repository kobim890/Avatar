import React from 'react';
import './App.css';
import {Avatar} from "./Avatar/Avatar";


const img = "https://s3-us-west-2.amazonaws.com/melingoimages/Images/61841.jpg"


function App() {
  return (
    <div className="App">
      <Avatar
          url={img}
          width={100}
          shape="circle"
      />
    </div>
  );
}

export default App;

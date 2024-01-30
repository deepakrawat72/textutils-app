import React, { useState } from 'react';
import TextForm from './TextForm';
import Navbar from './Navbar';

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"
    } else {
      setMode('dark')
      document.body.style.backgroundColor = "#495057"
    }
  }

  return (
    <>
      <Navbar title='TextUtils' otherText='About' mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode}/>
    </>
  );
}

export default App;

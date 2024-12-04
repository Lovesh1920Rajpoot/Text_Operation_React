import './App.css';
import Navbar from './components/Navbar';
import Textform from './Textform';
import React, {useState} from 'react';
function App() {
  const  [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '';
    }
  }
  return (
    <>
    <Navbar title= "TextForm" Features="Profile" love="Messages" Recents="Search" mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textform heading="enter the text to Analyse"/>   
    </div>
    </>
   ); 
}

export default App;

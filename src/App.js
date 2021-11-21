
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Assign1 from './components/Assign1';
import Assign2 from './components/Assign2';
import Spotlight from './components/Spotlight';


function App() {
  const [Style, setStyle] = useState({
    left: "78px",
    width: "calc(100% - 78px)"
  })

  const [mode, setmode] = useState("close");
  const toggleMode = () => {
    if (mode === "close") {
      setmode("");
      setStyle({
        left: "330px",
        width: "calc(100% - 330px)"
      })
    }
    else {
      setmode("close");
      setStyle({
        left: "78px",
        width: "calc(100% - 78px)"
      })
    }
  }
  
  const [Msg, setMsg] = useState("")

  const message = (msg) =>{
    setMsg(msg);
  }



  return (
    <>
      <Router>
        <Header toggleMode={toggleMode} mode={mode} Style={Style}/>
        <Navbar mode={mode} />
        <Routes>
          <Route exact path="/assignment/*" element={<Assign1 Style={Style} message={message}/>}></Route>
          <Route exact path="/" element={<Spotlight Style={Style}/>}></Route>
          <Route exact path="/assignment/Assign2" element={<Assign2 Style={Style} Msg={Msg}/> } ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

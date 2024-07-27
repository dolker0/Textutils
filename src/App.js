import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const[mode , setmode] = useState('ligth');
  const[alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }else{
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled" , "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3" >
        <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
          
        </div>
    </Router>
    
    </>
    
  );
}

export default App;

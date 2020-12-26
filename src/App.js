import react, { useState, useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import './App.css';

function App() {
  const [wasButtonClicked, setWasButtonClicked] = useState(false);
  const time = 240;
  const [usernameText, setUsernameText] = useState();
  const name = usernameText == null || usernameText == '' ? 'User' : usernameText;
  const link = usernameText == null || usernameText == '' ? 'http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=baconhairnormal' : 'http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username='+name;
  const href = usernameText == null || usernameText == '' ? '#' : 'https://www.roblox.com/search/users?keyword='+name;
  const [food, setFood] = useState();
  const [value, setValue] = useState(1);
  const minRobux = 1;
  const maxRobux = 1000000;

  const variants1 = {
    initial: { width: '0%' },
    visible: { 
      width: wasButtonClicked === false ? '0%' : '100%'
    }
  }

  const variants2 = {
    initial: { opacity: 0 },
    visible: wasButtonClicked === false ? { opacity: 0 } :  { opacity: 1 }

  }

  const variants3 = {
    initial: { display: 'none' },
    visible: wasButtonClicked === false ? { display: 'none' } :  { display: 'block' }

  }

  function setButton () {
    setWasButtonClicked(true);
  }

  function changeUsername (e) {
    if (wasButtonClicked === false) {
      setUsernameText(e.target.value)
    }
  }

  function changeFood (e) {
    if (wasButtonClicked === false) {
      setFood(e.target.value)
    }
  }

  function changeRobux (e) {
    if (wasButtonClicked === false) {
      setValue(e.target.value)
    }
  }

  return (
    <div className="App">
      <div className="popup" >
        <h1>Hello {name.substr(0, 1).toUpperCase()+name.substr(1, name.length)}!</h1>
        <a href={href} target="/" ><img className="pfp" src={link} /></a>
        <textarea value={usernameText} onChange={changeUsername} placeholder="Username(not required)" ></textarea>
        <textarea value={food} onChange={changeFood} placeholder="favorite food(required)" ></textarea>
        <input className="robux-amount" min={minRobux} max={maxRobux} value={value} onChange={changeRobux} type="range" ></input>
        <div className="robux-amount-text-container" >
          <p className="robux-amount-text" >{value}</p>
          <img className="robux-icon" src="https://www.seekpng.com/png/full/64-640936_roblox-hack-generator-roblox-robux-logo.png" />
        </div>
        <button onClick={setButton} >Give Robux</button>

        <motion.div 
        initial="initial"
        animate="visible"
        variants={variants2}
        className="loading-bar-container" >
          <motion.div 
          initial="initial"
          animate="visible"
          transition={{duration: time }}
          variants={variants1}
          className="loading-bar" >
          </motion.div>
        </motion.div>

        <motion.p 
        initial="initial" 
        animate="visible" 
        transition={{delay: time}}
        variants={variants3} 
        className="try-again-text" onClick={()=>{window.location.reload()}} >Error, Try Again later</motion.p>

        <motion.button 
        initial="initial" 
        animate="visible" 
        transition={{delay: time}}
        variants={variants3} 
        className="try-again-button" onClick={()=>{window.location.reload()}} >Try Again</motion.button>
      </div>
    </div>
  );
}

export default App;

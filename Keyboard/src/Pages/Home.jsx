import "../css/Home.css";
import {useState } from "react";
import Keyboard from "../Components/Keyboard";
import WordGame from "../Components/WordGame";
import ToggleSound from "../Components/ToggleSound";

function Home() {

    const [typedLetter, setTypedLetter] = useState(null)
    const [isSpecialKey, setSpecialKey] = useState(null)
    const [soundOn, setSoundOn] = useState(false)
  return (
    <div className="SiteContainer">
    <div className="SiteHeader">
      <h1>Keyboard Blitz</h1>
      <ToggleSound soundOn={soundOn} setSoundOn={setSoundOn}/>
    </div>
      <div>
        <WordGame typedLetter={typedLetter} setTypedLetter={setTypedLetter} isSpecialKey={isSpecialKey} setSpecialKey={setSpecialKey} soundOn={soundOn}/>
        <Keyboard typedLetter={typedLetter} isSpecialKey={isSpecialKey}/>
      </div>
    </div>
  );
}

export default Home;

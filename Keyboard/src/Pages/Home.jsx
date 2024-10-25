import "../css/Home.css";
import {useState } from "react";
import Keyboard from "../Components/Keyboard";
import WordGame from "../Components/WordGame";

function Home() {

    const [typedLetter, setTypedLetter] = useState(null)
    const [isSpecialKey, setSpecialKey] = useState(null)
  return (
    <>
    <div className="SiteHeader">
      <h1>Keyboard Blitz</h1>
    </div>
      <div>
        <WordGame typedLetter={typedLetter} setTypedLetter={setTypedLetter} isSpecialKey={isSpecialKey} setSpecialKey={setSpecialKey}/>
        <Keyboard typedLetter={typedLetter} isSpecialKey={isSpecialKey}/>
      </div>
    </>
  );
}

export default Home;

import { useState, useEffect, useRef} from "react";
import "../css/WordGame.css";
const defaultText =
  "As the sun dipped below the horizon, the sky transformed into a canvas of vibrant oranges and deep purples, casting a warm glow over the quiet town. The evening breeze carried the sweet scent of blooming jasmine, mingling with the distant sounds of laughter and music from a nearby festival. Streetlights flickered to life, illuminating the cobblestone streets where families strolled leisurely, savoring the moment. In this tranquil setting, time seemed to slow, allowing the beauty of the world to unfold in every detail.";

const WordGame = ({ typedLetter, setTypedLetter, setSpecialKey }) => {
  // useStates
  const inputRef = useRef(null);
  const [strArray, setStrArr] = useState([]);
  const [timer, setTimer] = useState(10);
  const [timerStarted, setTimerStarted] = useState(false);
  const [correctChar, setCorrectChar] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isTime0, setIsTime0] = useState(false);
  const [paragraph, SetParagraph] = useState(defaultText);

  // stats calculations
  useEffect(() => {
    if (timer === 0) {
      const charPerMin = Math.ceil(correctChar * 2);
      setCpm(charPerMin);
      const WordsPerMmin = Math.ceil(charPerMin / 5);
      setWpm(WordsPerMmin);
      const accuarcyByPercentage = (correctChar / strArray.length) * 100;
      const roundedAccuarcy = accuarcyByPercentage.toFixed(1);
      setAccuracy(roundedAccuarcy);
      setIsTime0(true);
    }
  }, [timer]);

  // keyboard and game functionality
  function handleKeyDown(e) {
    const specialKeys = ["Shift", "CapsLock", "Alt", "Control"];
    const lastTypedCharacter = strArray[strArray.length - 1];
    const currentParagraphLetter = paragraph[strArray.length - 1];
    if (specialKeys.includes(e.key)) {
      setSpecialKey(e.key);
      return;
    }
    if (timerStarted === false) {
      setTimerStarted(true);
    }
    if (typedLetter !== null && lastTypedCharacter === currentParagraphLetter) {
      setCorrectChar((correctChar) => correctChar + 1);
    }
    if (typedLetter !== null && lastTypedCharacter !== currentParagraphLetter) {
      setCorrectChar((correctChar) => correctChar - 1);
    }
    setTypedLetter(e.key);
    if (e.key === "Backspace") {
      setStrArr((strArray) => strArray.slice(0, -1));
    } else {
      setStrArr((strArray) => [...strArray, e.key]);
    }
  }

  // timer logic
  useEffect(() => {
    if (timer > 0 && timerStarted === true) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer, timerStarted]);

  // working out current letter and correct letters
  function getClassName(i) {
    if (strArray.length === i) {
      return "active";
    }
    if (strArray.length > i) {
      if (typedLetter !== null && strArray[i] === paragraph[i]) {
        return "correct";
      } else {
        return "incorrect";
      }
    }
  }

  // deals with user clicking on game
  function handleClick() {
    if (!gameStarted) {
      setGameStarted(true);
    }
    inputRef.current.focus();
  }

  // changes screen depending on state
  function conditionalRender() {
    if (gameStarted && timer > 0) {
      return paragraph.split("").map((char, i) => (
        <span className={`char ${getClassName(i)}`} key={i}>
          {char}
        </span>
      ));
    }
    if (!gameStarted && timer > 0) {
      return (
        <p className="start-game-text">
          Please click here to start the game. Once you start typing, the timer
          will start...
        </p>
      );
    }
    if (gameStarted && timer === 0) {
      return (      
      <div className="result">
        <p className="statistics time-r">Time Remaining: {timer} </p>
        <p className="statistics accuracy">Accuracy: {accuracy}%</p>
        <p className="statistics wpm">WPM: {wpm}</p>
        <p className="statistics cpm">CPM: {cpm}</p>
      </div>
      )
    }
  }

  // Generates paragraph depending on user difficulty 
    function ParagraphGen(selection){
    const difficulty = selection.target.value
    if(difficulty === "easy"){
        console.log('im here in easy')
        SetParagraph("The sun was out and the sky was a bright shade of blue. Birds flew over the trees, their songs filling the air. People walked by the river, some sat on the grass and watched the water flow. The breeze was cool, and the day felt calm. Children played with balls and ran in the park. A dog barked as it chased a stick. Mothers and fathers smiled at their kids, enjoying the simple joys of the day. In the afternoon, the town was busy as people went to the shops. By the end of the day, the sky was painted with orange and pink, and soon, the moon would rise. Everyone returned to their homes, ready to rest for the night.")
    }
    if(difficulty === "medium"){
        console.log('im here in medium')
        SetParagraph("As the sunlight broke through the early morning sky, the town slowly came to life. Families gathered in the park, while the children laughed and played with their toys. The breeze carried the scent of fresh flowers and the sound of birds chirping in the trees. In the distance, the market began to stir with activity. Vendors arranged their fresh produce, calling out to the passersby to admire their goods. People stopped to chat with friends, sharing stories and making plans for the day. The town square was bustling with a warm, friendly atmosphere, as the sunshine brightened the mood.")
    }
    if(difficulty=== "hard"){
        console.log('im here in hard')
        SetParagraph("In the quaint village, the morning began with a sense of urgency, as the townsfolk prepared for the busy day ahead. The horizon, still bathed in soft hues of pink and gold, gave a gentle glow to the narrow streets. As the vibrant sun climbed higher, the marketplace filled with the sounds of merchants calling out to passing customers. Vendors proudly displayed their goods, from exquisite pastries to colorful vegetables, each stall offering a unique aroma that blended into the lively air. A young woman, her mind buzzing with thoughts of the day’s tasks, drifted through the crowds.")
    }
}

  // handles refresh button and returns all state to default
  function refresh() {
    setTypedLetter(null);
    setSpecialKey(null)
    setStrArr([]);
    setTimer(10);
    setTimerStarted(false);
    setCorrectChar(0);
    setCpm(0);
    setWpm(0);
    setAccuracy(0);
    setGameStarted(false);
    setIsTime0(false);
  }

  return (
    <section className="word-game">
    <div className="Select-Your-Diff">
      <p>Please select your difficulty</p>
      <select className="DropDown"onChange={ParagraphGen} >
       <option className="selection" value="easy"> Easy </option>
       <option className="selection" value="medium"> Medium </option>
       <option className="selection" value="hard"> Hard </option>
      </select>
    </div>
    <div className="boarder">
      <div className="Timer">
      <span>{timer}</span>
      </div>
      <div className="word-game-container">
        <div className="test" onClick={handleClick}>
          <input
            type="text"
            className="input-field"
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <div className="text-field">{conditionalRender()}</div>
        </div>
      </div>
      <button className="Refresh" onClick={refresh}>
        Refresh
      </button>
      </div>
    </section>
  );
};

export default WordGame;

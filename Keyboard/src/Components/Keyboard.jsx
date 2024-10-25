import { useEffect, useState } from "react";
import "../css/keyboard.css";

function Keyboard({ typedLetter, isSpecialKey }) {
  return (
    <div className="container">
      <section className="Keyboard">
        <section className="row">
          <div className="keys"><div className={`innerkey ${typedLetter === "`" ? `active` : ``}`}>`</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "1" ? `active` : ``}`}>1</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "2" ? `active` : ``}`}>2</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "3" ? `active` : ``}`}>3</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "4" ? `active` : ``}`}>4</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "5" ? `active` : ``}`}>5</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "6" ? `active` : ``}`}>6</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "7" ? `active` : ``}`}>7</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "8" ? `active` : ``}`}>8</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "9" ? `active` : ``}`}>9</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "0" ? `active` : ``}`}>0</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "-" ? `active` : ``}`}>-</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "=" ? `active` : ``}`}>=</div></div>
          <div className="Backspace"><div className={`innerbackspace ${typedLetter === "Backspace" ? `active` : ``}`}>Backspace</div></div>
        </section>
        <section className="row">
          <div className="Tab"><div className={`innertab ${typedLetter === "Tab" ? `active` : ``}`}>Tab</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "q" ? `active` : ``}`}>Q</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "w" ? `active` : ``}`}>W</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "e" ? `active` : ``}`}>E</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "r" ? `active` : ``}`}>R</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "t" ? `active` : ``}`}>T</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "Y" ? `active` : ``}`}>Y</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "u" ? `active` : ``}`}>U</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "i" ? `active` : ``}`}>I</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "o" ? `active` : ``}`}>O</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "p" ? `active` : ``}`}>P</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "[" ? `active` : ``}`}>{'['}</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "]" ? `active` : ``}`}>{']'}</div></div>
          <div className="Slash"><div className={`innerslash ${typedLetter === "\\" ? `active` : ``}`}>\</div></div>
        </section>
        <section className="row">
          <div className="Caps_Lock"><div className={`innercapslock ${isSpecialKey === "CapsLock" ? `active` : ``}`}>Caps Lock</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "a" ? `active` : ``}`}>A</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "s" ? `active` : ``}`}>S</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "d" ? `active` : ``}`}>D</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "f" ? `active` : ``}`}>F</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "g" ? `active` : ``}`}>G</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "h" ? `active` : ``}`}>H</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "j" ? `active` : ``}`}>J</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "k" ? `active` : ``}`}>K</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "l" ? `active` : ``}`}>L</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === ";" ? `active` : ``}`}>;</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "'" ? `active` : ``}`}>'</div></div>
          <div className="Enter_Key"><div className={`inner_enter_key ${typedLetter === "Enter" ? `active` : ``}`}>Enter</div></div>
        </section>
        <section className="row">
          <div className="Shift_Left"><div className={`inner_shift_left ${isSpecialKey === "Shift" ? `active` : ``}`}>Shift L</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "z" ? `active` : ``}`}>Z</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "x" ? `active` : ``}`}>X</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "c" ? `active` : ``}`}>C</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "v" ? `active` : ``}`}>V</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "b" ? `active` : ``}`}>B</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "n" ? `active` : ``}`}>N</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "m" ? `active` : ``}`}>M</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "," ? `active` : ``}`}>,</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "." ? `active` : ``}`}>.</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "/" ? `active` : ``}`}>/</div></div>
          <div className="keys"><div className={`innerkey ${typedLetter === "?" ? `active` : ``}`}>?</div></div>
          <div className="Shift_Right"><div className={`inner_shift_right ${isSpecialKey === "Shift" ? `active` : ``}`}>Shift R</div></div>
        </section>
        <section className="row">
          <div className="Ctrl"><div className={`inner_ctrl ${isSpecialKey === "Control" ? `active` : ``}`}>Ctrl</div></div>
          <div className="Alt"><div className={`inner_alt ${isSpecialKey === "Alt" ? `active` : ``}`}>Alt</div></div>
          <div className="Space_Key"><div className={`inner_space_key ${typedLetter === " " ? `active` : ``}`}>____</div></div>
          <div className="Alt"><div className={`inner_alt ${isSpecialKey === "Alt" ? `active` : ``}`}>Alt</div></div>
          <div className="Ctrl"><div className={`inner_ctrl ${isSpecialKey === "Control" ? `active` : ``}`}>Ctrl</div></div>
        </section>
      </section>
    </div>
  );
}

export default Keyboard;

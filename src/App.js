import React, {useState} from 'react'
import './App.css';
import Button from './Button.js';

const App = () => {
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [previousButton, setPreviousButton] = useState(null);

  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      setPreviousButton(null);
      return;
    }
    if (content === "neg") {
      setValue(( num * -1 ).toString());
      setPreviousButton(null);
      return;
    }
    if (content === "%") {
      setValue(( num / 100).toString());
    
      setPreviousButton(null);
      return;
    }
    if (content === ".") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }
    if (content === "/") {
      if (operator !== null && previousButton !== "oper") {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "/") {
          setMemory(memory / parseFloat(value));
        } 
      } else if (previousButton !== "oper"){
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("/");
      setPreviousButton("oper");
      return;
    }
    if (content === "x") {
      if (operator !== null && previousButton !== "oper") {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "/") {
          setMemory(memory / parseFloat(value));
        } 
      } else if (previousButton !== "oper"){
        setMemory (parseFloat(value));
        }
      setValue("0");
      setOperator("x");
      setPreviousButton("oper");
      return;
    }
    if (content === "-") {
      if (operator !== null && previousButton !== "oper") {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "/") {
          setMemory(memory / parseFloat(value));
        } 
      } else if (previousButton !== "oper"){
          setMemory(parseFloat(value));
        }
      setValue("0");
      setOperator("-");
      setPreviousButton("oper");
      return;
    }
    if (content === "+") {
      if (operator !== null && previousButton !== "oper") {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "/") {
          setMemory(memory / parseFloat(value));
        } 
      } else if (previousButton !== "oper"){
          setMemory(parseFloat(value));
        }
      setValue("0");
      setOperator("+");
      setPreviousButton("oper");
      return;
    }
    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "x") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "/") {
        setValue((memory / parseFloat(value)).toString());
      } 
      setMemory(null);
      setOperator(null);
      return;
    }
    if (value[value.length - 1] === ".") {
      setValue(value + content);
    }  else {
      setPreviousButton(null);
      setValue(parseFloat(num + content).toString());
    }
  };





  return (
    <div className="App">
      <div id="display" className="Display"><h2>{ value }</h2></div>
      <div className="Buttons">
        <Button onButtonClick={handleButtonPress} id="clear" content="AC" type="function"/>
        <Button onButtonClick={handleButtonPress} content="neg" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} id="divide" content="/" type="operator" />
        <Button onButtonClick={handleButtonPress} id="seven" content="7" />
        <Button onButtonClick={handleButtonPress} id="eight" content="8" />
        <Button onButtonClick={handleButtonPress} id="nine" content="9" />
        <Button onButtonClick={handleButtonPress} id="multiply" content="x" type="operator"/>
        <Button onButtonClick={handleButtonPress} id="four" content="4" />
        <Button onButtonClick={handleButtonPress} id="five" content="5" />
        <Button onButtonClick={handleButtonPress} id="six" content="6" />
        <Button onButtonClick={handleButtonPress} id="subtract" content="-" type="operator"/>
        <Button onButtonClick={handleButtonPress} id="one" content="1" />
        <Button onButtonClick={handleButtonPress} id="two" content="2" />
        <Button onButtonClick={handleButtonPress} id="three"content="3" />
        <Button onButtonClick={handleButtonPress} id="add" content="+" type="operator"/>
        <Button onButtonClick={handleButtonPress} id="zero" content="0" />
        <Button onButtonClick={handleButtonPress} id="decimal" content="." />
        <Button onButtonClick={handleButtonPress} id="equals" content="=" type="operator" />
      </div>
    </div>
  )
}
export default App;


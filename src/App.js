import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [operator, setOperator] = useState('+');
  const [firstInput,  setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [result, setResult] = useState('');

  const onReset = () => {
    setResult('0'); 
    setFirstInput('0');
    setSecondInput('0');
    setOperator('@');
};

  const onCalculate = () => {
    var num1="1";
    num1=Number(num1);
    // typeof
    // 형변환

    // 자바스크립트에는 타입
    // undefined : typeof instance === "undefined"
    // Boolean : typeof instance === "boolean"
    // Number : typeof instance === "number"
    // String : typeof instance === "string"
    // BigInt : typeof instance === "bigint"
    alert(1121)
    if(operator === '+'){
      setResult(Number(firstInput) + Number(secondInput) ) 
    } else if(operator === '-'){
      setResult(Number(firstInput) - Number(secondInput))
    }
      else if(operator === '*'){
        setResult(Number(firstInput) * Number(secondInput))
      }
      else if(operator === '/'){
        setResult(Number(firstInput) / Number(secondInput))
      }
  }


  //input1
  //input2
  //result



  return (
    <>
      <div className='calculator-border'>
        <div className="claculator-input">
          <TextField className="calculator-number" label="첫째항" type='number' value={firstInput} onChange={e => setFirstInput(e.target.value)} />
          <span className='operator'>{operator}</span>
          <TextField className="calculator-number" label="둘째항" type='number' value={secondInput} onChange={e => setSecondInput(e.target.value)}/>
          <Button variant="text">=</Button>
          <TextField className="calculator-number" label="result" value={result}></TextField>
        </div>
        <div className='button-count'>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('+')}>+</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('*')}>x</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('-')}>-</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('/')}>%</Button>
        </div>
        <div className='calculate'>
          <Button className='calculate-input' variant="contained" onClick={onReset}>reset</Button>
          <Button className='calculate-input' variant="contained" onClick={onCalculate}>calculate</Button>
        </div>
      </div>
    </>
  );
}

export default App;

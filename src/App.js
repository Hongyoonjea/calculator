import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useCallback } from 'react';

function App() {
  const [operator, impormation, setOperator] = useState('+');
  // const [ number, setNumber ] = useState("0");
  //input1
  //input2
  //result

  state = {
    impormation: [
      {name: "",
      value: ""}
    ],

  }

  handleRemove = (id) => {
    const { information, onRemove } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }


   handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

  return (
    <>
      <div className='calculator-border'>
        <div className="claculator-input">
          <TextField className="calculator-number" label="input number" />
          <span className='operator'>{operator}</span>
          <TextField className="calculator-number" label="input number" />
          <Button variant="text">=</Button>
          <TextField className="calculator-number" label="result" ></TextField>
        </div>
        <div className='button-count'>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('+')}>+</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('*')}>x</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('-')}>-</Button>
          <Button className='button-margin' variant="outlined" onClick={()=> setOperator('/')}>%</Button>
        </div>
        <div className='calculate'>
          <Button className='calculate-input' 
          onClick={this.handleRemove} 
          onRemove={this.handleRemove}
          variant="contained">reset</Button>
          <Button className='calculate-input' variant="contained">calculate</Button>
          <Button className='calculate-input' variant="contained">remove</Button>
        </div>
      </div>
    </>
  );
}

export default App;

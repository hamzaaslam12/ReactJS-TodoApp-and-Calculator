import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Calculator = () => {
          let [num, setNum] = useState('')
          let [value1, setValue1] =useState()
          let [value2, setValue2] =useState()
          let [operation, setOperation] = useState()

          const result = () => {
                    let number1 = Number(value1)
                    let number2 = Number(value2)
                    if(operation === '+'){
                              let result = (number1 + number2);
                              setNum(result)
                    }
                    else if (operation === '-'){
                              let result = (number1 - number2);
                              setNum(result)
                    }
                    else if (operation === '*'){
                              let result = (number1 * number2);
                              setNum(result)
                    }
                    else {
                              let result = (number1 / number2);
                              setNum(result)
                    }
                    // let result = eval(number1 + number2)
                    // console.log(result)
          }

          return ( 
                    <div>
                              <h2>HELLO WORLD</h2>
                              <input 
                              type='text'
                              value={num}
                              onChange={(e) => setNum(e.target.value)}
                              />
                              <br />
                              <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
        <Button onClick={() => setNum(num + '1')}>1</Button>
        <Button onClick={() => setNum(num + '2')}>2</Button>
        <Button onClick={() => setNum(num + '3')}>3</Button>
        <Button onClick={() => {
                  setOperation('+')
                  setValue1(value1 = num)
                    setNum('')
                  }}>+</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
        <Button onClick={() => setNum(num + '4')}>4</Button>
        <Button onClick={() => setNum(num + '5')}>5</Button>
        <Button onClick={() => setNum(num + '6')}>6</Button>
        <Button onClick={() => {
                  setOperation('-')
                  setValue1(value1 = num)
          //         console.log(num)
                    setNum('')
                  }}>-</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
        <Button onClick={() => setNum(num + '7')}>7</Button>
        <Button onClick={() => setNum(num + '8')}>8</Button>
        <Button onClick={() => setNum(num + '9')}>9</Button>
        <Button onClick={() => {
                  setOperation('*')
                  setValue1(value1 = num)
                    setNum('')
                  }}>*</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
        <Button onClick={() => setNum(num + '7')}>0</Button>
        <Button>.</Button>
        <Button onClick={() => {
                  setValue2(value2 = num)
                  result()
        }}>=</Button>
        <Button onClick={() => {
                  setOperation('/')
                  setValue1(value1 = num)
                    setNum('')
                  }}>/</Button>
        </ButtonGroup>
                    </div>
           );
}
 
export default Calculator;
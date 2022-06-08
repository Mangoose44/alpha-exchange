import {useState} from 'react';
import { InputNumber, Container, Label, InputContainer, img } from './InputNumberStyles'

function InputNumberComponent({ isNumeric,currencyIcon, onChange, value, label }) {
  const [val, setVal] = useState('');

  return (
    <Container>
    {label && <Label>{label}</Label>}
    <InputContainer>
      {currencyIcon && <img src={currencyIcon.default} alt=".." />}
      <InputNumber
        type="text"
        pattern="[0-9]+[.,]?[0-9]*"
        value={val}
        onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
      </InputContainer>
    </Container>
  );
}

export default InputNumberComponent;
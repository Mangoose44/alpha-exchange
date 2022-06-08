import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Container = styled.div`

`

export const  img = styled.div`
width: 45px;
height: 45px;
`



export const InputNumber = styled.input`
   background-color: transparent;
  //background-color: ${colors.white};
  color: #111;
  width: 370px;
  //outline: 0;
  border: none;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  //border-radius: 10px;
  font-size: 25px;
  
`

export const Label = styled.p`
  margin-bottom: 10px;
  color: ${colors.darkGray};
  font-size: 24px;
`

export const InputContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  padding-left: 5px;
  height: 55px;
`
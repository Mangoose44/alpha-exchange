import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input  from '../../components/Input'
import images from '../../images'
import Arrow from '../../components/arrowIcon'
import Checkmark from '../../components/Checkmark'
import InputNumberComponent from '../../components/NumberInput'
import coinAddressValidator from 'coin-address-validator'
import {cardNumberValidation} from '../../Utils/cardNumberValidation'



 

function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ getValue, setGetValue ] = useState('')
  const [ toAddress, setToAddress ] = useState('')
  const [ cardNumber, setCardNumber ] = useState('')
  const [ isAgreement, setIsAgreement ] = useState('')
  


  const isAddressValid = coinAddressValidator.validate(toAddress);

  

  console.log ({isAddressValid })

  const isValid = cardNumberValidation(cardNumber) 

  console.log({isValid})

  
  return (
    <Container>
      <InputNumberComponent
        currencyIcon={images.usdIcon}
        label="You pay"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Arrow/>
      <InputNumberComponent
        currencyIcon={images.btcIcon}
        label="You get"
        onChange={value => setGetValue(value)}
        value={getValue} />
      <Input
        label="To address"
        onChange={value => setToAddress(value)}
        value={toAddress} />
      <Input
        currencyIcon={images.walletIcon}
        label="Your card number"
        onChange={value => setCardNumber(value)}
        value={cardNumber} />
        
      {/* <Agreement
        currencyIcon={images.emptyCheck}
        label="Agree with our" /> */}
      <Checkmark
        onClick={() => setIsAgreement(!isAgreement)}
        currencyIcon={images.checkmarkIcon} 
        label='Согласен с '
        LinkText = 'ЛС'
        checked={isAgreement}
        />

      <Button
        disabled={ !isAddressValid || !isAgreement || !isValid}
        >Exchange</Button>
    </Container>
  )
}

export default FirstScreen


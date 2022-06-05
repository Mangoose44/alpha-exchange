import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input  from '../../components/Input'
import images from '../../images'
import Arrow from '../../components/arrowIcon'
import Checkmark from '../../components/Checkmark'
import Agreement from '../../components/Agreement'
import coinAddressValidator from 'coin-address-validator';

 

function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  const [ getValue, setGetValue ] = useState('')
  const [ toAddress, setToAddress ] = useState('')
  const [ cardNumber, setCardNumber ] = useState('')
  const [ isAgreement, setIsAgreement ] = useState('')
  
  const isAddressValid  = coinAddressValidator.validate({toAddress});

  console.log ({ isFormValid, isAddressValid })
  // if (payValue.length > 5) alert('lol')
  //console.log({ isFormValid, payValue })
  return (
    <Container>
      <Input
        currencyIcon={images.usdIcon}
        label="You pay"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Arrow/>
      <Input
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
        label="Your card Number"
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
        disabled={isFormValid && isAddressValid && isAgreement }
        onClick={() => setisFormValid(!isFormValid || !isAddressValid)}>Exchange</Button>
    </Container>
  )
}

export default FirstScreen
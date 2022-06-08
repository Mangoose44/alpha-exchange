import { React, useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirstScreen, SecondScreen, ThirdScreen, FourthScreen } from './screens'

import styled from 'styled-components'



const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-bottom: 50px;
  flex-direction: column;
`



function App () {
  const [activeScreen, setActiveScreen] = useState(1)

  useEffect(() => {
    setActiveScreen(parseInt(localStorage.getItem('currentScreen')))
  }, [])


  return (
    <BrowserRouter>
    <RootContainer>
      <Routes>
      <Route path='/' element={<FirstScreen />}/>
      <Route path='/secondscreen' element={<SecondScreen />}/>
      <Route component={ThirdScreen}/>
      <Route component={FourthScreen}/>
      </Routes>
    </RootContainer>
    </BrowserRouter>
  );
}



export default App;

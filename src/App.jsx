import { useState } from 'react'
import Heading from './Heading'
import Display from './Display'
import KeyPad from './KeyPad'
import calculate from './calculateLogic'
import './index.css'
import { useEffect } from 'react'



export default function App() {
  const [theme,setTheme]=useState('1')
  const [currDisplay,setCurrDisplay]=useState('')
  const [prevDisplay,setPrevDisplay]=useState('')


  const style={
    1:{
      main_background:`bg-theme1-background-main_background`
    },
    2:{
      main_background:`bg-theme2-background-main_background`
    },
    3:{
      main_background:`bg-theme3-background-main_background`
    }
  }

  function changeTheme(theme){
    setTheme(theme)
  }

  //can only add dot if the last string of number doesn't have a dot
  function addNumber(newChar){
    if(newChar==='.'){
      //this regex will find a string of number at the end of the string
      let lastNumber=/(?<=.)[\d]*$/gm.exec(currDisplay)[0]
      if(lastNumber){
        setCurrDisplay(currDisplay+newChar)
      }
      
      return
    }
    setCurrDisplay(currDisplay+newChar)
  }

  function addOperator(newChar){
    if(newChar.match(/\+|\-/)){
      setCurrDisplay(currDisplay+newChar)

      return
    }

    if(newChar.match(/X|\//)){
      //can only add X and / if the last character is a number or dot
      if(currDisplay.charAt(currDisplay.length-1).match(/\d|\./)) setCurrDisplay(currDisplay+newChar)
      
      return
    }
  }

  function delChar(){
    setCurrDisplay(`${currDisplay.substring(0,currDisplay.length-1)}`)
  }

  function clear(){
    setPrevDisplay('')
    setCurrDisplay('')
  }

  function handleCalculate(){
    if(currDisplay.charAt(currDisplay.length-1).match(/\+|\-|X|\//)){
      setPrevDisplay('Please make sure that the last character is a number or a dot')
      return
    }

    setPrevDisplay(currDisplay) 
    setCurrDisplay(calculate(currDisplay)) 
  }



  function addNewChar(newChar){
    setPrevDisplay('')
    if(newChar.match(/\d|\./)){
      addNumber(newChar)
      return
    }
    if(newChar.match(/\+|\-|X|\//)){
      addOperator(newChar)
      return
    }
    delChar()
    return
  }

  return (
    <main className={`font-['League_Spartan'] min-h-screen ${style[theme].main_background}
    flex justify-center items-center`}>
      <div className='w-80
      flex justify-center items-center flex-col gap-4'>
        <Heading theme={theme} changeTheme={changeTheme}></Heading>
        <Display theme={theme} currDisplay={currDisplay} prevDisplay={prevDisplay}></Display>
        <KeyPad theme={theme} addNewChar={addNewChar} delChar={delChar} handleCalculate={handleCalculate} clear={clear}></KeyPad>
      </div>
    </main>
  )
}


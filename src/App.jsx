import { useState } from 'react'
import './App.css'
function App() {
  const [result, setResult] = useState('')
  const [widthInputValue, setWidthInputValue] = useState('')
  const [heightInputValue, setHeightInputValue] = useState('')
  const [pixelsValue, setPixelsValue] = useState("")
  const getHeight = (e)=>{
    setHeightInputValue(e.target.value)
  }
  const getWidth = (e)=>{
    setWidthInputValue(e.target.value)
  }
  const getPixelsValue = (e)=>{
    setPixelsValue(e.target.value)
  }
  const calculeResposivity = ()=>{
    if((widthInputValue && heightInputValue) && pixelsValue){
      if (widthInputValue == 0 || heightInputValue == 0 || pixelsValue == 0){
        setResult('zero não é um numero valido, verifique os campos e tente novamente!')
      }
      else{
        let heightPercentage = (pixelsValue/heightInputValue) * 100
        let widthPercentage = (pixelsValue/widthInputValue) * 100
        setResult(`${pixelsValue} correspondem a: ${widthPercentage.toFixed(2)}vw e a ${heightPercentage.toFixed(2)}hw.`)
      }
    }
    else{
      setResult("verifique os campos e tente novamente!")
    }
  }
  return (
    <div className='app'>
      <p>Pixels to ViewPort unit</p>
      <p id='title'>Digite a largura e altura base para os cálculos.</p>
      <input type='number' placeholder='altura base (em pixels)' id='heightInput' onChange={getHeight} required/>
      <input type='number' placeholder='largura base (em pixels)' id='widthInput' onChange={getWidth} required/>
      <input type='number' placeholder='valor em pixels' id='pixelsInput' onChange={getPixelsValue} required/>
      <button onClick={calculeResposivity}>calcular</button>
      <br />
      <label>{result}</label>
    </div>
  )
}

export default App

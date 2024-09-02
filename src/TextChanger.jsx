import React from 'react'
import { useState,useEffect } from 'react'

const TextChanger = () => {
  const texts=["hi i'm Lavkush Vishwakarma","hi i'm Lavkush Vishwakarma","hi i'm Lavkush Vishwakarma"]
  const [currentText,setCurrentText]=useState('')
  const [endValue,setEndValue]=useState(true)
  const [isforward,setFarward]=useState(true)
  const [index,setIndex]=useState(0)
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setCurrentText(texts[index].substring(0,endValue));
      if(isforward){
        setEndValue((prev)=> prev +1);
      }else{
        setEndValue((prev)=>prev-1)
      }
    if(endValue>texts[index].length+10){
      setFarward(false)
    }
    if(endValue<2.1){
      setFarward(true)
      setIndex((prev)=>prev&texts.length)
    }
    

    },20)

    return ()=>clearInterval(intervalId)
  },[endValue,isforward,index,texts]);;
  return (
    <div className='transition ease duration-300'>{currentText}
      
    </div>
  )
}

export default TextChanger

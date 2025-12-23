import React, { useRef, useState } from 'react'
import { data } from './data/data'


function App() {
  const  level=useRef(0)
  const [question,setQuestion]=useState(data[0])
  const [score,setScore]=useState(0)
  const [autorise,setAutorise]=useState(true)
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  const options=[ref1,ref2,ref3,ref4]




  const verifier=(e,ans)=>{
        if(autorise){
              if(ans==question.ans){
                e.target.classList.add('correct')
                setScore((prev)=>{return prev+1})
              }
              else 
              {
                e.target.classList.add("fausse")
                options[question.ans-1].current.classList.add("correct")
              }
              setAutorise(false)
        }
  }




  const suivant=()=>{
    if(autorise==false){
        setAutorise(true)
        level.current+=1
        setQuestion(data[level.current])
        options.forEach((ele)=>{
          ele.current.classList.remove("correct")
          ele.current.classList.remove('fausse')
        })
    }
  }


  const recommencer=()=>{
    setAutorise(true)
    setQuestion(data[0])
    setScore(0)
    level.current=0
  }




  if(level.current<=data.length-1)
  return (
    <div className='bg-white rounded-[13px] box-border p-10 flex flex-col items-center gap-7 w-[80%] min-[600px]:w-[500px] aider'>
        <h1 className='font-[500] text-gray-800 text-[22px] w-full'>Quiz App</h1>
        <hr className='h-[3px] bg-black w-full'/>
        <p className='font-[500] text-[#000000d7] text-[18px] text-start w-full'>{level.current+1}.{" "+question.question}:</p>
        <ul className='flex flex-col gap-4 w-full'>
              <li ref={ref1} onClick={(e)=>{verifier(e,1)}} className='border-[#0000009c] border-[2px]  w-full  box-border p-4 rounded-[10px] '>1. {question.option1}</li>
              <li ref={ref2} onClick={(e)=>{verifier(e,2)}} className='border-[#0000009c] border-[2px]  w-full  box-border p-4 rounded-[10px] '>2. {question.option2}</li>
              <li ref={ref3} onClick={(e)=>{verifier(e,3)}} className='border-[#0000009c] border-[2px]  w-full  box-border p-4 rounded-[10px] '>3. {question.option3}</li>
              <li ref={ref4} onClick={(e)=>{verifier(e,4)}} className='border-[#0000009c] border-[2px]  w-full  box-border p-4 rounded-[10px] '>4. {question.option4}</li>
        </ul>
        <button onClick={suivant} type='submit' className='rounded-[12px] bg-blue-600 py-3 font-[600] text-white w-[150px] hover:bg-blue-400 cursor-pointer'>Next</button>
        {`score ${score} of ${data.length}`}
    </div>
    
  )
  else 
  return <>
      <div id='mee' className='bg-white rounded-[13px] box-border p-10 flex flex-col items-center gap-7 w-[80%] min-[600px]:w-[500px] aiderme'>
        <h1 className='font-[500] text-gray-800 text-[22px] w-full'>Quiz App</h1>
        <p className='font-[600] text-[30px] text-center'>{`Yout score is ${score} of ${data.length}`} </p>
        <button onClick={recommencer} type='submit' className='rounded-[12px] bg-blue-600 py-3 font-[600] text-white w-[150px] hover:bg-blue-400 cursor-pointer'>Restart</button>
      </div>
         </>
}

export default App

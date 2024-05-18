import { useState } from 'react'
import './App.css'

function App() {
 
  const [colorbg,setColorbg] = useState('')
  const [colortxt,setColortxt] = useState('')


  const onClick = async () =>{
    let [tab] = await chrome.tabs.query({active:true})
    chrome.scripting.executeScript<string[], void>({
      target:{tabId:tab.id!},
      args:[colorbg,colortxt],
      func: (colorbg,colortxt) =>{
      // document.body.style.backgroundColor = "blue"
      document.body.style.backgroundColor = colorbg
      document.body.style.color = colortxt
      // alert('Hello my chroma extension')
      }
    });
  }

  return (
    <>
      <div className='font-bold text-xl'>Change page bg and texts colors in seconds</div>
      {/* <input type="color" onChange={(e)=>setColor(e.target.value)} /> */}
      <div className="card">
        
       <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <div className='text-xs p-1 border border-black rounded-md cursor-pointer' onClick={onClick}>Change bg-color</div>
          <input type="color" onChange={(e)=>setColorbg(e.target.value)} /> 
        </div>
        <div className='flex gap-2 items-center mt-2'>
          <div className='text-xs p-1 border border-black rounded-md cursor-pointer' onClick={onClick}>Change texts-color</div>
          <input type="color" onChange={(e)=>setColortxt(e.target.value)} /> 
        </div>
        

       </div>

        
      </div>
      <p className="read-the-docs">
        Created by Fosberg for devs who have problems when choosing page colors.
      </p>
    </>
  )
}

export default App

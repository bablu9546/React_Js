
import { useState, useTransition } from "react";
function App(){ 
   
  const[pending, startTransition]=useTransition();
  const timeSet=()=>{

    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,4000));
    })
  }

  // const[pending,setPending]=useState(false);   //useState for Transition Hook
  // const timeSet=async()=>{
  //   setPending(true);
  //    await new Promise(res=>setTimeout(res,5000));
  //     console.log('done');

  //   setPending(false)
  // }
  return(
    <div>
      <h1>useTransition Hook in React js </h1>
      {
        pending?
      <img  style={{width:'200px'}} src="https://cdn.pixabay.com/animation/2025/11/11/02/19/02-19-36-889_512.gif" alt="human-error" />:null
      }
       <br />
      <button disabled={pending} onClick={timeSet}>ClickMe</button>
    </div>
  )
}
export default App;
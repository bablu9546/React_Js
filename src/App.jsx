import React, { lazy, Suspense, useState } from 'react';
//import User from './User';

const User=lazy(()=>import('./User')); 

function App(){
  const[load,setLoad]=useState(false);
  return(
    <div>
      <h1>LazY Loading</h1>
      {
        load? <Suspense fallback={<h3>loading...</h3>}><User/></Suspense>:null
      }
      

      <button onClick={(event)=>setLoad(true)}>Load User</button>
    </div>
  )
}
export default App;
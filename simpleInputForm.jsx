//small project (name simpleForm) 
 import {useState} from 'react';
 function App(){
   const[name,setName]=useState('');
   const[password,setPassword]=useState('');
   const[email,setEmail]=useState('');
   return(
   <div>
     <h1>controlled component</h1>
     <form action="" method="get">
       <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter the userName"/><br /><br />
       <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter the password" /><br /><br />
       <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter_Email"/><br /><br />
       <button>Submit</button>
      
       <button onClick={()=>{setName(''); setName(''); setPassword('');}}>Clear</button>
       <h3>{name}</h3>
       <h3>{password}</h3>
       <h3>{email}</h3>
     </form>
   </div>
 )
 }
 export default App;

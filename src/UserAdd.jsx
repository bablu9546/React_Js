import { useState } from "react"

export default function UserAdd(){
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[email,setEmail]=useState('');

    const createUser= async()=>{
       console.log(id,name,age,email);
       const url="http://localhost:3000/users";
       let response= await fetch(url,{
        method:'Post',
        body:JSON.stringify({id,name,age,email})
       });
       response= await response.json();
       if(response) alert("successful new user Added");
         else alert("no added user");
    }

    return(
        <div style={{textAlign:'center'}}>
            <h1>Add New User</h1>
             
             <input type="number" placeholder="number or ID" onChange={(event)=>setId(event.target.value)} required/> <br /><br />
            <input type="text" placeholder="Enter name"  onChange={(event)=>setName(event.target.value)} required /> <br /><br />
            <input type="number" placeholder="Enter the Age"  onChange={(event)=>setAge(event.target.value)} required/> <br /> <br /> 
            <input type="email" placeholder="Enter the email" onChange={(event)=>setEmail(event.target.value)} required/> <br /> <br />

            <button onClick={createUser} style={{background:'blue'}}>Add User</button>
        </div>
    )
}
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


export default function UserEdit(){
    const{id}=useParams();
   // console.log(id);
        const[Id,setId]=useState('');
       const[name,setName]=useState('');
       const[age,setAge]=useState('');
       const[email,setEmail]=useState('');
       const url="http://localhost:3000/users/"+id;
       const navigate=useNavigate();

   

    useEffect(()=>{
      getUserData();
    },[]);

    const getUserData= async()=>{
       
        
        let response=await fetch(url);
        response= await response.json();
         console.log(response);
         
         setId(response.Id);
         setName(response.name);
         setEmail(response.email);
         setAge(response.age);

    }

    async function updateUsersData(){
        console.log(Id,name,age,email);
        let response=await fetch(url,{
            method:'Put',
            body:JSON.stringify({Id,name,age,email})
        });
        response=await response.json();
        console.log(response);
        if(response){
            alert("success edit");
            navigate('/');
        }
        else{
            alert("not success edit");
        }

     
    }


    return(
     <div style={{textAlign:'center'}}>
        <h1>Edit User Details</h1>  

        <input type="id" placeholder="userID"  value={Id} onChange={(event)=>setId(event.target.value)}/>  <br /><br />

        <input type="name" placeholder="userName"  value={name} onChange={(event)=>setName(event.target.value)} />  <br /><br />
        <input type="email" placeholder="userEmail" value={email} onChange={(event)=>setEmail(event.target.value)}/> <br /><br />
        <input type="age" placeholder="userAge" value={age} onChange={(event)=>setAge(event.target.value)}/> <br /><br />

        <button onClick={updateUsersData}>update_user</button>


     </div>
    )
}

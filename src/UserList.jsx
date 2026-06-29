import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserList() {
    const[userData, setUserData]=useState([]);
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const url = "http://localhost:3000/users";


    useEffect(() => {
        setLoading(true);
        getUsersData();
    }, [])

    const getUsersData = async () => {
      
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);

    }

    const deleteUser=async (id)=>{
        //console.log(id);
        let response=await fetch(url+"/"+id,{
            method:'delete'
        })
        response= await response.json();
        if(response){

         alert('delete');
        getUsersData();
        }

    }

    const editUser=(id)=>{
      navigate("/edit/"+id);
    }


    return (
        <div>
            <h1> Make Routes and pages for Add user and User List UI  </h1>
            <ul className="user-list">
                <li>Id</li>
                <li>Name</li>
                <li>age</li>
                <li>Email</li>
                <li>Action</li>
                <li>Edit</li>
            </ul>


            {
                !loading?
            userData.map((user,index)=>(
                <div key={index}>
                   <ul className="user-list">
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.email}</li>
                     <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
                    <li><button onClick={()=>editUser(user.id)}>Edit</button></li>
                   </ul>
                </div>
            ))
            : <h1>Data loading...</h1>
            }
        </div>
    )
}
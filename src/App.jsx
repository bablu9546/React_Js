

// import { useEffect,useState } from "react";


// export default function App(){
//     const[userData,setUserData]=useState("");

//     useEffect(()=>{
//         getUsersData();
//     },[]);

//     async function getUsersData(){
//       const url="https://dummyjson.com/users";
//       let response=await fetch(url);
//       response= await response.json();
//       //console.log(response);
//       setUserData(response.users);
//     }
//     console.log(userData);
//     return(
//         <div>
//             <h1>Fetch API Data</h1>
//             <ul className="user-list">
//                <li>First Name</li>
//                <li>Last Name</li>
//                <li>Age</li>

//             </ul>


//             {
//               userData &&  userData.map((user,index)=>(
//                     //  <h2 key={index}>{user.firstName}</h2> 

//                     <ul className="user-list">
//                         <li>{user.firstName}</li>
//                         <li>{user.lastName}</li>
//                         <li>{user.age}</li>
//                     </ul>
//                 )) 
//             }
//         </div>
//     )

// }









// Navigations, Links aur Hooks ke liye:
import {BrowserRouter,Routes, Route, Link, useNavigate, useLocation, NavLink } from 'react-router-dom'
import "./App.css";
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';

function App(){
    return(
   <div>
    
  <ul style={{display: 'flex', gap:'2px'}}>
    <li style={{gap:'4px'}} >
        <NavLink to="/">List</NavLink>
    </li>

     <li style={{gap:'4px'}}>
        <NavLink to="/add">AddUser</NavLink>
    </li>
    
  </ul>

    {/* <h1> Make Routes and pages for Add user and User List UI  </h1> */}
    {/* <UserList/> */}

    <Routes>
      <Route path="/" element={<UserList/>} />
      <Route path="/add" element={<UserAdd/>} />
      <Route path="/edit/:id" element={<UserEdit/>} />
    </Routes>

   </div>
    )
}
export default App;
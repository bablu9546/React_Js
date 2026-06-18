// import { NavLink } from "react-router";
// function NavBar() {
//     return (
//         <>
//             <Link to="/" >Home</Link>
//             <Link to="/about" >About</Link>
//             <Link to="/Login" ><h3>Login</h3></Link>
//         </>
//     )
// }
// export default NavBar;







import "./header.css";
import { NavLink, Outlet } from "react-router";
function NavBar() {
   return (
      <div>
         <div className="header">
            <div>
               <NavLink className="NavLink" to="/" ><h2>Login</h2></NavLink>
            </div>
            <div>
               <ul>
                  <li>
                     <NavLink className="NavLink" to="/" >Home</NavLink>
                  </li>

                  <li>
                     <NavLink className="NavLink" to="/in/user/About" >About</NavLink>
                  </li>

                  <li>
                     <NavLink className="NavLink" to="/in/user/Login" >Login</NavLink>
                  </li>

                  <li>
                     <NavLink className="NavLink" to="/College " >College</NavLink>
                  </li>

                  <li>
                     <NavLink className="NavLink" to="/User" >User</NavLink>
                  </li>

                  <li>
                     <NavLink className="NavLink" to="/User/List" >UserList</NavLink>
                  </li>
               </ul>
            </div>
         </div>
         <Outlet/>
      </div>
   )
}
export default NavBar;

import { NavLink } from "react-router";
import { Outlet } from "react-router";
export default function College(){
    return(
    <div className="college" style={{textAlign:'center'}}>
        <h4>College Page</h4>
        <h3><NavLink to="/">Go back to home</NavLink></h3>
        <NavLink className="link" to=""  >Student</NavLink>
        <NavLink className="link" to="department" >Department</NavLink>
        <NavLink className="link" to="details" >CollegeDetails</NavLink>
        <Outlet/>
    </div>
    )
}



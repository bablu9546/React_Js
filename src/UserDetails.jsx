
import { useParams ,Link} from "react-router";
const UserDetails=()=>{
    const paramsData=useParams();
    console.log(paramsData);
    return(
        <div>
            <h2>UserDetails </h2>
            <h2>userId: {paramsData.id}</h2>
            <h3><Link to="/User">Back</Link></h3>
        </div>
    )
}
export default UserDetails;
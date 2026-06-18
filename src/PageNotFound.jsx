import { Link } from "react-router";

export default function PageNotFound() {
    return (
        <div style={{textAlign:'center'}}>
            <h1>page Not found</h1>
            <div>
                <Link to="/">Go to Home</Link>
            </div>
             <img  style={{width:'35%'}} src="src/assets/404Page.avif" alt="human-error" />
        </div>
    )
}
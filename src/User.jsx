import { Link } from "react-router"

export default function User() {

    const userData = [
        { id: 1, name: 'Bablu' },
        { id: 2, name: 'Anil' },
        { id: 3, name: 'Kumar' },
        { id: 4, name: 'Mejal' }
    ]
    return (
        <div style={{ marginLeft: 20, textDecoration: 'none', }}>
            <h1>User List </h1>

            {
                userData.map((item, index) => (
                    <div style={{ textDecoration: 'none' }}>
                        <Link to={"/User/"+ item.id}><h3 key={index}>{item.name}</h3></Link>
                    </div>
                ))
            }
        </div>
    )
}

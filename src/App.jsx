
//  import Home from './Home.jsx';
//  import About from './About.jsx';

// import { Route, Routes, Link } from "react-router";

// function App(){
//   return(
//     <>

//     <Link to="/">Home </Link><br />
//     <Link to="/about">About </Link>

//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//     </Routes>
//     </>
//   )
// }
// export default App;








//uses Router 

import { Link, Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import College from './College';
import Login from './Login';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import Student from './Student';
import Department from './Department';
import Details from './Details';
import User from './User';
import UserDetails from './UserDetails';
import UserList from './UserList';


function App() {
  return (
    <>
      {/* <NavBar/> */}

      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path='/User/List?' element={<UserList />} />

          {/* <Route path="/User/:id" element={<UserDetails/>} /> */}
          <Route path="/User/:id/:name?" element={<UserDetails />} />

          <Route path='in'>
            <Route path='/in/user'>
              <Route path="/in/user/Login" element={<Login />} />
              <Route path="/in/user/About" element={<About />} />
            </Route>
          </Route>

        </Route>




        <Route path="/College" element={<College />}>
          <Route index element={<Student />} />
          <Route path="Department" element={<Department />} />
          <Route path="Details" element={<Details />} />
        </Route>

        <Route path='/*' element={<PageNotFound />} />

        {/* <Route path='/*' element={<Home/>}/> */}
        {/* <Route path='/*' element={<Login />} /> */}


        {/* <Route path="/*" element={<Navigate to="/Login" />} />   any error this link  */}

      </Routes>
    </>
  )
}
export default App;
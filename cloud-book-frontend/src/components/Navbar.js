import React from 'react'
import { Link , useLocation,useNavigate} from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  // useEffect(()=>{
  //   console.log(location.pathname)
  // },[location])
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark navFix">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><i className="fa-solid fa-book-open "><span className='px-1'>cloudbook</span></i> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/'? 'active':''}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about'? 'active':''}`} to="/about">About</Link>
          </li>
        </ul>
        {!localStorage.getItem('token')?<><Link to="/login" className="btn btn-success mx-1" tabIndex="-1" role="button" aria-disabled="true">Login</Link>
        <Link to="/signup" className="btn btn-success mx-2" tabIndex="-1" role="button" aria-disabled="true">Signup</Link></> : <button className='btn btn-success ' onClick={handleLogout}>Log out</button>}
      </div>
    </div>
  </nav> 
  )
}

export default Navbar

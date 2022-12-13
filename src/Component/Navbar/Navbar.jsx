import React from 'react'
import {Link} from 'react-router-dom'
import img from './img/logo.png'


export default function Navbar({userData , logOut}) {
  return <>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand px-5 text-light " to="">
        <img className='logo' src={img} alt=''/>
      <span className='l-text'>Game Over</span>  
    </Link>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" navbar-collapse" id="navbarSupportedContent">

    {userData? <ul className="navbar-nav  me-auto mb-2 mb-lg-0 px-5" >
        <li className="nav-item">
          <Link className=" nav-link text-light active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link text-muted " to="all">All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className=" nav-link text-muted dropdown-toggle" to=""   id="navbarDropdown"  data-bs-toggle="dropdown" >
            Platforms
          </Link>
          <ul className="dropdown-menu" >
            <li><Link className="dropdown-item" to="pc">Pc</Link></li>
            <li><Link className="dropdown-item" to="browser">browser</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className=" nav-link text-muted dropdown-toggle" to=""  id="navbarDropdown"  data-bs-toggle="dropdown" >
            Sort-by
          </Link>
          <ul className="dropdown-menu" >
            <li><Link className="dropdown-item" to="release-date">release-date</Link></li>
            <li><Link className="dropdown-item" to="popularity">popularity</Link></li>
            <li><Link className="dropdown-item" to="alphabetical">alphabetical</Link></li>
            <li><Link className="dropdown-item" to="relevance">relevance</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className=" nav-link text-muted dropdown-toggle" to="categories"  id="navbarDropdown"  data-bs-toggle="dropdown">
          Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="racing">racing</Link></li>
            <li><Link className="dropdown-item" to="sports">sports</Link></li>
            <li><Link className="dropdown-item" to="social">social</Link></li>
            <li><Link className="dropdown-item" to="shooter">shooter</Link></li>
            <li><Link className="dropdown-item" to="open">open-world</Link></li>
            <li><Link className="dropdown-item" to="zombie">zombie</Link></li>
            <li><Link className="dropdown-item" to="fantasy">fantasy</Link></li>
            <li><Link className="dropdown-item" to="actionrbg">action-rpg</Link></li>
            <li><Link className="dropdown-item" to="action">action</Link></li>
            <li><Link className="dropdown-item" to="flight">flight</Link></li>
            <li><Link className="dropdown-item" to="battle">battle-royal</Link></li>
          </ul>
        </li>
      </ul>:''}
      <ul className=" list-unstyled flex-md-row flex-column d-flex m-0 align-items-center">
      

      {
      userData? <>
       
      
       <li className='px-2' onClick={logOut}> <Link to='logout' className="btn btn-outline-ftg  mx-2" type="submit">Logout</Link></li>
            <li className='px-2'> <Link to='profile' className="btn btn-outline-ftg mx-2" type="submit">profile</Link></li>
      
            </>:""
           
    }
      
      </ul>
    </div>
  </div>
</nav>


  </>
}

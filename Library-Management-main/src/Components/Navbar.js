import react from 'react';
import {HiBarsArrowDown} from 'react-icons/hi2';
import {IoIosNotifications} from 'react-icons/io';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineLogout} from 'react-icons/hi';
import {Link,useNavigate} from 'react-router-dom';
export default function Navbar(props) {
    return(
<>
        <nav class="navbar navbar-expand-lg navbar-light" style={{color:"black"}}>

          <div class="container-fluid">
         
          <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
             <HiBarsArrowDown/>
            </button>
        
       
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
              <a class="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://www.schoolsmartcards.com/wp-content/themes/schoolsmartcard/images/library_bnr_img.png"
                  height="40"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
           
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to='/' style={{textDecoration:"none"}}><a class="nav-link" href="#">Books</a></Link>
                </li>
                
                <li class="nav-item">
                <Link to={'/admin'} style={{textDecoration:"none"}}><a class="nav-link" href="#">Admin</a></Link>
                </li>

                <li class="nav-item">
                <Link to='/addbooks' style={{textDecoration:"none"}}><a class="nav-link" href="#">Add Book</a></Link>
                </li>
              </ul>
            
            </div>
            
        
            <div class="d-flex align-items-center">
             
              <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
             
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">Sign up</a>
                </li>
              </ul>
              
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <IoIosNotifications style={{width:"35px",height:"45px"}}/>
                  <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">New Books are arrived</a>
                  </li>
                </ul>
              </div>
               
              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CgProfile style={{width:"35px",height:"45px", color:"black"}}/>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="#">Logout <HiOutlineLogout style={{fontSize:"25px",marginRight:"8px"}}/></a>
                  </li>
                </ul>
              </div>
            </div>    
          </div>
        </nav>

<div className="Content">{props.children}</div>
</>
    );
}
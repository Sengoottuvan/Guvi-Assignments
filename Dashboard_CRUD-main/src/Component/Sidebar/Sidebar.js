import React from "react";
import "./Sidebar.css";
import { FaSignOutAlt } from "react-icons/fa";
import {AiOutlineDashboard} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {GiLightningSpanner} from "react-icons/gi";
import {AiFillFolderOpen, AiTwotoneMail} from "react-icons/ai";
import {BiBarChartSquare} from "react-icons/bi";
import {BsTable} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";



export default function Sidebar() {
  return (
    <div>
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admin-panel-1994601-1682251.png"
          alt="logo"
        />
        <span className="sidebarname">
          Adm<span>in</span>
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
        {/* Dashboard */}
        <Link className="Sidebarlink" to="/dashboard">
            <div className="menuItem">
              <div className="icon">
                <AiOutlineDashboard />
              </div>
              <span><span className="sidebarname">Dashboard</span></span>
            </div>
            </Link>


            {/* Components */}
            <Link className="Sidebarlink"  to='/Components'>
            <div className="menuItem">
              <div className="icon">
                <FiSettings />
              </div>
              <span  className="sidebarname">Components</span>
            </div></Link>
            {/* Utilites */}
            

              <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a">
                  

              <div className="menuItem">
              
              <div className="icon">
                  <GiLightningSpanner />
                </div><span className="Utility"><span className="sidebarname">Utilities</span></span>
                </div>

              </DropdownToggle>
              <DropdownMenu className="Dropdownlist" >
              <Link className="Sidebarlink"  to='/Utilitycolors'><DropdownItem href="#" tag="a">
               Colors
                </DropdownItem></Link>

                <Link className="Sidebarlink"  to='/Utilityborders'><DropdownItem href="#" tag="a">
               Borders
                </DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>

            
            
            {/* Pages */}
              <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a">
              <div className="menuItem">
              <div className="icon">
                <AiFillFolderOpen />
              </div>
              <span className="sidebarname">Pages</span>
              </div>
              </DropdownToggle>
              <DropdownMenu className="Dropdownlist" >
              {/* <Link className="Sidebarlink"  to='/usersignin'><DropdownItem href="#" tag="a">
                 Log In
                </DropdownItem></Link> */}
                <Link className="Sidebarlink"  to='/usersignup'>
                <DropdownItem href="#" tag="a">
                Register
                </DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
           
              {/* Charts */}
                        
                        <Link className="Sidebarlink" to='/Charts'>
                        <div className="menuItem">
              <div className="icon">
                <BiBarChartSquare />
              </div><span className="sidebarname">Charts</span>
              </div>
              </Link>
           
            {/* Charts */}
            <Link className="Sidebarlink" to='/Table'>
            <div className="menuItem">
              <div className="icon">
                <BsTable />
              </div>
              <span className="sidebarname">Tables</span>
            </div></Link>

            <hr></hr>
        <div className="menuItem logout"><FaSignOutAlt/><span >Sign Out</span></div>
      </div>
    </div>

    </div>
  );
}

//    
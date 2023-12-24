import React from "react";
import "./Navbar.css";
import {
  Input,
  InputGroup,
  Button,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiTwotoneMail,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiFontSize } from "react-icons/bi";

 function Navbar() {
  return (
    <>
    <div className="Navbar">
      <div className="InputNavbaruser">
        <InputGroup className="Inputbar">
        <Input placeholder="Search for..." />
        <Button>
          <AiOutlineSearch />
        </Button>
      </InputGroup> 
      </div>
      <div className="user">
        <ul>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a">
              <BsFillBellFill />
            <sup style={{ color: "white", backgroundColor: "red" }}>3</sup>
              </DropdownToggle>
              <DropdownMenu className="Dropdownlist" >
                <DropdownItem href="#" tag="a">
                 Notification 1
                </DropdownItem>

                <DropdownItem href="#" tag="a">
                Notification 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a">
                <AiTwotoneMail />
                <sup style={{ color: "white", backgroundColor: "red" }}>3</sup>
              </DropdownToggle>
              <DropdownMenu className="Dropdownlist" >
                <DropdownItem href="#" tag="a">
                 Message 1
                </DropdownItem>

                <DropdownItem href="#" tag="a">
                Message 2
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  Message 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a">
                <span className="Navbarname">User</span>
                <CgProfile style={{ fontSize: "30px" }} />
              </DropdownToggle>
              <DropdownMenu className="Dropdownlist">
                <DropdownItem href="#" tag="a">
                  <AiOutlineUser
                    style={{ fontSize: "25px", "marginRight": "15px" }}
                  />
                  Profile
                </DropdownItem>

                <DropdownItem href="#" tag="a">
                  <FiSettings
                    style={{ fontSize: "25px", "marginRight": "15px" }}
                  />
                  Settings
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  <AiOutlineUnorderedList
                    style={{ fontSize: "25px", "marginRight": "15px" }}
                  />
                  Activity
                </DropdownItem>
                <hr></hr>
                <DropdownItem>
                  <FiLogOut
                    style={{ fontSize: "25px", "margin-right": "15px" }}
                  />
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar;

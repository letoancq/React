import React, { Component } from "react";
// import {STAFFS} from "./shared/staffs;"
import StaffList from "./components/StaffListComponent";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import  ChangeThemes  from "./components/changeThemes";
import {ChangeCol6, ChangeCol3, ChangeCol2} from "./components/ChangeCol"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div>
        <Navbar dark color={"primary"}>
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
          <div>
            <button className="changecol" onClick={ChangeThemes()}>
              Change
            </button>
            <ul className="changecol-menu" >
              <li id="col6" onClick={() => ChangeCol6()}>Dạng 2 cột</li>
              <li id="col4">Dạng 3 cột</li>
              <li id="col2">Dạng 6 cột</li>
            </ul>
          </div>
        </Navbar>
        <StaffList />
      </div>
    );
  }
}

export default App;

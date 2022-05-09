import React, { Component } from "react";
// import {STAFFS} from "./shared/staffs;"
import StaffList from "./components/StaffListComponent";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import {showChangeThemes} from "./components/changeThemes"



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
            <button className="changecol">Themes</button>
            <ul className="changecol-menu">
              <li>Dạng 2 cột</li>
              <li>Dạng 3 cột</li>
              <li>Dạng 6 cột</li>
            </ul>
          </div>
        </Navbar>
        <StaffList />
      </div>
    );
  }
}

export default App;

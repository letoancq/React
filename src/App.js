import React, { Component } from "react";
// import {STAFFS} from "./shared/staffs;"
import StaffList from "./components/StaffListComponent";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
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
        </Navbar>
        <StaffList />
        <div className="suggest">
        Bấm vào tên để xem thông tin.

        </div>

      </div>
    );
  }
}

export default App;

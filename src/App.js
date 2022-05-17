import React, { Component } from "react";
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color={"primary"}>
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;

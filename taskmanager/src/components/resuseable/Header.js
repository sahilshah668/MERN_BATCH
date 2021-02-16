import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            collapsed:false
        }
    }

    toggleNavbar = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {
        const {collapsed} = this.state
        return (
            <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/task" >Tasks</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/addtask" >Add Task</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

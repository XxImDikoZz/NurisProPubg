import '../Style.css'
import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Dropdown, Button } from 'react-bootstrap'
import categories from '../JSON/categories'
import {
    Link
} from "react-router-dom";
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }
    onUpdateSearch = (e) => {
        const lol = e.target.value
        this.setState({ term: lol })
        this.props.OnSearchSelect(lol)
    }
    render() {
        let { HomePost, onFilterSeleect, onCategorySelect, Winda } = this.props
        return (
        
                <Navbar sticky='top' className={'mb-4', 'd-flex'} bg="light" expand="lg">
                    <Navbar.Brand style={{ cursor: 'grab', fontWeight: '700', fontSize: '28px', color: 'rgb(0, 202, 202)' }} onClick={HomePost}>Главная💸</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className={"block_nav"} id="navbarScroll" >
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontSize: "20px" }}
                            navbarScroll
                        >
                            <Nav.Link style={{ color: '#e91e63', fontWeight: '600' }} onClick={onFilterSeleect}>Скидки🔥</Nav.Link>
                            <Nav.Link>
                                <Link style={{ color: 'darkorange', fontWeight: '600', textDecoration: 'none' }} to="/Basket">
                                    Корзина💰
                                </Link>
                            </Nav.Link>
                            <NavDropdown style={{ fontWeight: '600' }} title="Категории" id="navbarScrollingDropdown">
                                {categories.map((v) => {
                                    return (
                                        <Dropdown.Item onClick={() => onCategorySelect(v.id)}>
                                            {v.short_title}
                                        </Dropdown.Item>
                                    )
                                })}
                            </NavDropdown>
                        </Nav>
                        <Nav className={'block_for'}>
                            <FormControl
                                onClick={Winda}
                                style={{ cursor: "help", border: '2px solid rgb(0, 202, 202)', color: 'rgb(0, 202, 202)', fontWeight: '500', fontSize: '20px' }}
                                onChange={this.onUpdateSearch}
                                type="search"
                                placeholder="Поиск 🔎"
                                className="mr-2"
                                aria-label="Search"
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
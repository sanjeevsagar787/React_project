import React from 'react';
import "../Style/mainstyle.css"
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel } from "react-bootstrap";

import {products } from "../constraint"
function User() {
    return (
        <div className="product-C">
            {
                products.map((ele,index) => {
                    return (
                        <span key={index}>
                            <img src={ele.Urls}></img>
                            <b>{ele.name}</b>
                        </span>
                    )
                })
            }
        </div>

    )
}

export default User
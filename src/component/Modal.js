import React, { useState, render } from 'react'
import { Modal, ListGroup } from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Style/mainstyle.css"


function Example(props) {
    const { cartItem } = props
    // console.log(cartItem)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}> */}
            <div className="cart">
                <Nav.Link href="#action1">
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        size={"1.5x"} color={"#ffffff"}
                        onClick={handleShow} />
                    <span>
                        {cartItem.length}
                    </span>
                </Nav.Link>
            </div>
            {/* </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   { cartItem.length ?
                    (<ListGroup>
                        {
                            cartItem.map((item, index) =>
                                <ListGroup.Item>
                                    <div className="cart_item_img" >
                                        <img src={item.image} />
                                    </div>
                                    <b>{(item.title).substring(0, 15)}</b><br/>
                                    <span>$ {item.price}</span>
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>):<div>No Item in cart</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<Example />);

export default Example
import { useState, useEffect } from 'react';
import "../Style/mainstyle.css"
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import "../Style/mainstyle.css"
import Carouselss from "./Carousel"
import User from "./User"
// import Navbars from "./Navbar"
import ProductLists from "./ListProduct"
import Titlebar from "./Headers";
import ProductItem from "./ProductItem";
import Example from './Modal';



function Navbars() {
  // const [textInput, settextInput] = useState("")
  const [searchInput, setSearchInput] = useState("");
  // console.log(textInput)
  const [product, setproduct] = useState([])
  const [cartItem, setcartItem] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [id,setid] = useState([])
  const arr =[]
  useEffect(() => {
    // let Employee = "https://fakestoreapi.com/products/";
    axios
      .get('https://fakestoreapi.com/products/')
      .then(res => {
        setproduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  // useEffect(()=>{
  //   let filterresultproducts = product.filter((x)=>x.title.startsWith(textInput));
  //   console.log(filterresultproducts)
  //   setfilterresult(filterresultproducts)
  // },[textInput])
  useEffect(() => {
    let tempFilteredResults = product.filter((x) =>
      x.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    setFilteredProducts(tempFilteredResults);
  }, [searchInput]);
  let onSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  let addItemtocart = (product) => {
    const index = cartItem.findIndex((x) => x.id === product.id);
    if(index===-1){
      setcartItem((prev)=>[...prev,product])
    }
    else{
      alert("Item already Exist")
    }
    console.log(cartItem)
    
      // cartItem.map((ele, index) => {
      //   // console.log(ele.id)
      //   if (ele.id == product.id) {
      //     setcartItem((prev) => [...prev, product])
      //     console.log(ele.id,product.id)
      //   }
      //   else {
      //     console.log("error")

      //   }
      // })
    
  }
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" width="75px"></img>
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 mb"
              aria-label="Search"
              // value={textInput}
              // onChange={(textInput) => settextInput(textInput.target.value)}
              value={searchInput}
              onChange={onSearchChange}
            />
            {/* <Button>
              <FontAwesomeIcon icon={faSearch} size={"1x"} />
            </Button> */}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <div className="wrappers">
                {/* <Nav.Link href="#action2">Cart</Nav.Link> */}
                <NavDropdown title="Sanjeev Sagar" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">My Order</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Super Coin</NavDropdown.Item>
                </NavDropdown>
                <div className="color-1">
                  {/* <Nav.Link href="#" >
              Cart
              </Nav.Link> */}
                </div>
              </div>
            <Example cartItem={cartItem} />

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <User />
      <Carouselss />
      <Titlebar />
      {/* sagar1={obj} props syntax to pass into another Function*/}
      <ProductItem product={filteredProducts.length ? filteredProducts : product} addItemtocart={addItemtocart} />
      <Titlebar />
      <ProductLists />
    </div>
  )
} export default Navbars
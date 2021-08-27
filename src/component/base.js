import React from "react";
import "../Style/mainstyle.css"
import Carouselss from "./Carousel"
import User from "./User"
import Navbars from "./Navbar"
import ProductLists from "./ListProduct"
import Titlebar from "./Headers";
import ProductItem from "./ProductItem";

function base() {
  // var obj = {
  //   name:"sanjeev sagar",
  //   roll:"1748510087",
  // }
  // var sagar = <h1>sagar</h1>
  return (
    <div>
      <Navbars/>
      {/* <User />
      <Carouselss />
      <Titlebar/> */}
      {/* sagar1={obj} props syntax to pass into another Function*/} 
      {/* <ProductLists />
      <Titlebar/>
      <ProductItem/> */}
    </div>

  );
}
export default base;

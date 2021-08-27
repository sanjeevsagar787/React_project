import React from 'react';
import "../Style/mainstyle.css"
import { Productlist } from "../constraint"
function ProductLists(props) {
    return (
        <div className="shadow">
            <div className="product-d ">
                {
                    Productlist.map((ele, index) => {
                        return (
                            <span key={index}>
                                <img src={ele.Urls}></img>
                                <b>{ele.name}</b>
                                <p>{ele.price}</p> 
                                {/* <p>{props.sagar1.roll}</p> */}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default ProductLists
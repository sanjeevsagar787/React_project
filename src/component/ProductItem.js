import react from 'react'
import {Button} from "react-bootstrap";
import { Next } from 'react-bootstrap/esm/PageItem';

import "../Style/mainstyle.css"
// import axios from 'axios'
export default function ProductItem(props) {
    const {product,addItemtocart} = props
    // console.log(product)
    // const [count,setcount] = useState(0)
    // const [product,setproduct] = useState([])
    // useEffect(()=>{
    //     // let Employee = "https://fakestoreapi.com/products/";
    //     axios
    //     .get('https://fakestoreapionClick={()=>setcount(count+1).com/products/')
    //     .then(res=>{
    //       setproduct(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])

    return (
        <div className="shadow">
                {/* <button>{count}</button> */}
            <div className="product-d">
               
                {
                    product.map((ele, index) => {
                        return (
                            <span key={index}>
                                <img src={ele.image}></img>
                                <b>{(ele.title).substring(0, 15)}</b>
                                <p>Rs {ele.price}</p> 
                                
                                <Button className="btn-danger" onClick={()=>addItemtocart(ele)}>Add to Cart</Button>
                                {/* {console.log(addItemtocart)} */}
                                {/* <p>{ele.title}</p> */}
                                {/* <p>{props.sagar1.roll}</p> */}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

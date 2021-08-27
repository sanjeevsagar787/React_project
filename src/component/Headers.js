import React from 'react';
import "../Style/mainstyle.css"
import { Button } from "react-bootstrap";

function Titlebar() {
    return (
        <div>
            <div class="topnav">
                <p className="sizes">Deal of the day</p> 
                <Button variant="primary">VEIW ALL</Button>
            </div>
        </div>
    )
}
export default Titlebar
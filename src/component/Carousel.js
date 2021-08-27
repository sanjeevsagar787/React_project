import React from 'react';
import { Carousels } from '../constraint';
import { Carousel } from "react-bootstrap";
import "../Style/mainstyle.css"


function Carouselss() {
    return (
        <div className="mt-2 px-2 ">
            <Carousel >
                {
                    Carousels.map((data, index) => {
                        return (
                            
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100 changeHeight"
                                        src={data.Urls}
                                        alt={data.alt}
                                    />
                                </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div >
    )
}
export default Carouselss
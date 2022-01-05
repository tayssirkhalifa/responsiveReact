import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "./Slider.css"
import { sliderItems } from "../data"
import { useState } from "react"

const Slider = () => {
    const [slideIndex, SetslideIndex] = useState(0)
    const HandleClick = (direction) => {
        if (direction === "left") {
            SetslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            console.log(slideIndex)
        }
        else {
            SetslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }


    };
    return (
        <div className="container-silder">
            <div className="Arrow" direction="left" style={{ left: '10px' }} onClick={() => HandleClick("left")}>
                <ArrowBackIos />
            </div>
            <div className="wrapper" slideindex={slideIndex} style={{ transform: "translateX(" + slideIndex * (-100) + "vw" + ")" }}>
                {sliderItems.map(item => (


                    <div className="slide">

                        <div className="imagecontainer>">
                            <img className="image" src={item.img} ></img>
                        </div>
                        <div className="info">

                            <h1 className="tiltle">{item.title}</h1>
                            <p className="desc">{item.desc}</p>
                            <button className="button">SHOP NOW</button>
                        </div>

                    </div>


                ))}
            </div>

            <div className="Arrow" direction="right" style={{ right: '10px' }} onClick={() => HandleClick("right")}>
                <ArrowForwardIos />
            </div>

        </div>
    )
}

export default Slider

import React from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import "../CSS/ImageSlider.css"

export default function ImgageSlider(props) {
    const [imageIndex, setImageIndex] = React.useState(0)

    function previousImage() {
        setImageIndex(index => {
            if (index === 0) return props.images.length - 1
            return index - 1
        })
    }
    function nextImage() {
        setImageIndex(index => {
            if (index === props.images.length - 1) return 0
            return index + 1
        })
    }
    return (
        <div className="image-slider">
            <div className="sliding-img">
                {props.images.map(url => (
                    <img key={url} src={url} alt="" className="image-slide" style ={{translate:`${-100 * imageIndex}%`}}/>
                ))}
            </div>
            <button onClick={previousImage} className="left-btn"><ArrowBigLeft /></button>
            <button onClick={nextImage} className="right-btn"><ArrowBigRight /></button>
        </div>
    )
}
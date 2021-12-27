import React, {useEffect, useState} from 'react';
import Slider from "../Other/Slider/Slider";
import "./Gallery.css"
import getGallery from "../../API/getGallery";

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    useEffect(()=>{
            getGallery().then(response => setGallery(response.data))
    }, [])



    return (
        <div className="Gallery">
            {
                gallery.map((item, index) =>(<Slider key={`${item}_${index}`} slides = {item} />))
            }
        </div>
    );
};

export default Gallery;
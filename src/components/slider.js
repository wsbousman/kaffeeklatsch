import React, {useState} from 'react'
import {motion} from 'framer-motion'
import ti1 from '../assets/ti1.png'
import ti2 from '../assets/ti2.png'
import ti3 from '../assets/ti3.png'
import ti4 from '../assets/ti4.png'
import ti5 from '../assets/ti5.png'
import '../App.css';


const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            return updatedIndexes
        })
    }

    const images = [
        ti1,
        ti2,
        ti3,
        ti4,
        ti5
    ]

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ]

    const imageVariants = {
        center: {x: "0%", scale: 1, zIndex: 5},
        left1: {x: "50%", scale: 0.7, zIndex: 2},
        left: {x: "-90%", scale: 0.5, zIndex: 1},
        right: {x: "90%", scale: 0.5, zIndex: 1},
        right1: {x: "-50%", scale: 0.7, zIndex: 2},
    }

    return (
        <div className="relative">

        <div className="slider">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="img"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{duration: 0.5}}
                    style={{width: '40%', position: 'absolute', top:'50px', border: '1px solid rgb(238, 238, 238)', padding: '8px 8px', margin: '0px 0px 50px 0px'}}
                />
            ))}
        </div>

        <div className="wrapper">
        <button className="button" onClick={handleNext}>Next</button>
        </div>

        </div>
    )
}

export default ImageSlider
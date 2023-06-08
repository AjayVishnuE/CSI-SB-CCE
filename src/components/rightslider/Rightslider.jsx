import React, { Component } from 'react'
import "./rightslider.css"
import BH1 from "../../assets/BH51.jpg";
import BH2 from '../../assets/BH52.JPG';
import BH3 from '../../assets/BH53.JPG';
import BH4 from '../../assets/BH54.JPG';
import BH5 from '../../assets/BH55.JPG';
import BH6 from '../../assets/BH56.jpg';


export default class Rightslider extends Component {
    render() {
        return (
            <div className="right-slider">
                <div className="right-slide-track">
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH1} alt="" />
                    </div>
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH2} alt="" />
                    </div>
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH3} alt="" />
                    </div>
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH4} alt="" />
                    </div>
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH5} alt="" />
                    </div>
                    <div className="right-slide">
                        <img className="beachhack-slider-imgs" src={BH6} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

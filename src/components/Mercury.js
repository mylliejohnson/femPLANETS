import React from 'react';
import { useState, useEffect } from 'react'
import '../App.css'
import data from "../data.json"

import Image from '../assets/mercury.png'

import planetImg from '../assets/mercury.png'
import structureImg from "../assets/planet-mercury-internal.svg"
import geologyImg from "../assets/geology-mercury.png"

function Mercury() {

    let mercury = data[0]

    // let activeBtn = {
    //     background: `#419EBB`,
    //     border: 'none'
    // }

    let [activeTab, setActiveTab] = useState(mercury.overview)
    let [activeBtn, setActiveBtn] = useState({
        background: `#419EBB`,
        border: 'none'
    })
    let [notActiveBtn, setNotActiveBtn] = useState(null)

    let imageMap = {
        structure: structureImg,
        geology: geologyImg,
        overview: planetImg
    }

    let [img, setImage] = useState(mercury.images[imageMap.overview])

    // console.log(image)

    let currentTab = (tab) => setActiveTab(mercury[tab])
    let currentTabStyle = () => setActiveBtn(activeBtn)

    return (

        <div className='wrapper'>
            <div className='planet'>
                <div className='img-div'>
                    <img className='planet-img' width={300} src={Image} />
                </div>

                <div className='theplanet'>
                    <h1>{mercury.name}</h1>
                    <p className="overview">{activeTab.content}</p>
                    <p className="source">Source: <a href={activeTab.source}>Wikipedia</a></p>

                    <div className="buttons" >
                        <button onClick={() => {
                            currentTab("overview") 
                            currentTabStyle()
                        }}><h3><span className='button-num'>01</span> OVERVIEW</h3></button>
                        <button onClick={() => currentTab("structure")}><h3><span className='button-num' >02</span> INTERNAL STRUCTURE</h3></button>
                        <button onClick={() => currentTab("geology")}><h3><span className='button-num'>03</span> SURFACE GEOLOGY</h3></button>
                    </div>
                </div>
            </div>

            <div className='facts'>
                <div className='fact'>
                    <h4>ROTATION TIME</h4>
                    <h2 className='days'>{mercury.rotation}</h2>
                </div>
                <div className='fact'>
                    <h4>REVOLUTION TIME</h4>
                    <h2 className='days'>{mercury.revolution}</h2>
                </div>
                <div className='fact'>
                    <h4>RADIUS</h4>
                    <h2 className='days'>{mercury.radius}</h2>
                </div>
                <div className='fact'>
                    <h4>AVERAGE TEMP.</h4>
                    <h2 className='days'>{mercury.temperature}</h2>
                </div>
            </div>
        </div >
    );
}

export default Mercury; 
import React from 'react';
import { useState } from 'react'
import '../App.css'
import data from "../data.json"
import Image from '../assets/earth.png'

function Earth() {

    let earth = data[2]

    let active = {
        background: `#6D2ED5`,
        border: 'none'
    }

    return (

        <div className='wrapper'>
            <div className='planet'>
                <div className='img-div'>
                    <img className='planet-img' width={500} src={Image} />
                </div>

                <div className='theplanet ov-special'>
                    <h1>{earth.name}</h1>
                    <p className="overview">{earth.overview.content}</p>

                    <p className="source"><a>Source: <a href={earth.overview.source}>Wikipedia</a></a></p>

                    <div className="buttons" >
                        <button style={active}><h3><span className='button-num'>01</span> OVERVIEW</h3></button>
                        <button><h3><span className='button-num'>02</span> INTERNAL STRUCTURE</h3></button>
                        <button><h3><span className='button-num'>03</span> SURFACE GEOLOGY</h3></button>
                    </div>
                </div>
            </div>

            <div className='facts'>
                <div className='fact'>
                    <h4>ROTATION TIME</h4>
                    <h2 className='days'>{earth.rotation}</h2>
                </div>
                <div className='fact'>
                    <h4>REVOLUTION TIME</h4>
                    <h2 className='days'>{earth.revolution}</h2>
                </div>
                <div className='fact'>
                    <h4>RADIUS</h4>
                    <h2 className='days'>{earth.radius}</h2>
                </div>
                <div className='fact'>
                    <h4>AVERAGE TEMP.</h4>
                    <h2 className='days'>{earth.temperature}</h2>
                </div>
            </div>
        </div>
    );
}

export default Earth; 
import React from 'react';
import { useState } from 'react'
import '../App.css'
import data from "../data.json"
import Image from '../assets/uranus.png'

function Uranus() {

    let uranus = data[6]

    let active = {
        background: `#1EC1A2`,
        border: 'none'
    }

    return (

        <div className='wrapper'>
            <div className='planet'>
                <div className='img-div'>
                    <img className='planet-img' width={450} src={Image} />
                </div>

                <div className='theplanet ov-special'>
                    <h1>{uranus.name}</h1>
                    <p className="overview ">{uranus.overview.content}</p>

                    <p className="source"><a>Source: <a href={uranus.overview.source}>Wikipedia</a></a></p>

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
                    <h2 className='days'>{uranus.rotation}</h2>
                </div>
                <div className='fact'>
                    <h4>REVOLUTION TIME</h4>
                    <h2 className='days'>{uranus.revolution}</h2>
                </div>
                <div className='fact'>
                    <h4>RADIUS</h4>
                    <h2 className='days'>{uranus.radius}</h2>
                </div>
                <div className='fact'>
                    <h4>AVERAGE TEMP.</h4>
                    <h2 className='days'>{uranus.temperature}</h2>
                </div>
            </div>
        </div>
    );
}

export default Uranus; 
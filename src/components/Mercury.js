import React from 'react';
import { useState, useEffect } from 'react'
import '../App.css'
import data from "../data.json"
import Image from '../assets/mercury.png'

function Mercury() {



    let active = {
        background: `#419EBB`,
        border: 'none'
    }

    let mercury = data[0]

    let [overview, setOverview] = useState(mercury.overview.content)

    let [structure, setStructure] = useState(mercury.structure.content)

    let [hello, setHello] = useState(0)

    let switchBtn = () => {
        console.log('hi')
    }


    return (

        <div className='wrapper'>
            <div className='planet'>
                <div className='img-div'>
                    <img className='planet-img' width={300} src={Image} />
                </div>

                <div className='theplanet'>
                    <h1>{mercury.name}</h1>
                    <p className="overview">{overview}</p>

                    <p>{hello}</p>

                    <p className="source">Source: <a href={mercury.overview.source}>Wikipedia</a></p>

                    <div className="buttons" >
                        <button style={active}><h3><span className='button-num'>01</span> OVERVIEW</h3></button>
                        <button><h3><span className='button-num' onClick={setOverview(structure)}>02</span> INTERNAL STRUCTURE</h3></button>
                        <button onClick={() => setHello(hello + 100)}><h3><span className='button-num'>03</span> SURFACE GEOLOGY</h3></button>
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
        </div>
    );
}

export default Mercury; 
import React from 'react';
import data from '../data.json'

function Planet(props) {

    // onClick={() => currentTab("overview")}
    //  onClick={() => currentTab("structure")}
    // onClick={() => currentTab("geology")}

    console.log(data)



    return (
        <div className="container">
        
        <h1>{name}</h1>

            {data.map((planet, i) => (
                <div className='wrapper' key={i}>
                    <div className='planet'>
                        <div className='img-div'>
                            <img className='planet-img' width={300} src={Image} />
                        </div>

                        <div className='theplanet'>
                            <h1>{planet.name}</h1>
                            <p className="overview">{planet.overview.content}</p>
                            <p className="source">Source: <a href={planet.overview.source}>Wikipedia</a></p>

                            <div className="buttons" >
                                <button><h3><span className='button-num'>01</span> OVERVIEW</h3></button>
                                <button><h3><span className='button-num' >02</span> INTERNAL STRUCTURE</h3></button>
                                <button><h3><span className='button-num'>03</span> SURFACE GEOLOGY</h3></button>
                            </div>
                        </div>
                    </div>

                    <div className='facts'>
                        <div className='fact'>
                            <h4>ROTATION TIME</h4>
                            <h2 className='days'>{planet.rotation}</h2>
                        </div>
                        <div className='fact'>
                            <h4>REVOLUTION TIME</h4>
                            <h2 className='days'>{planet.revolution}</h2>
                        </div>
                        <div className='fact'>
                            <h4>RADIUS</h4>
                            <h2 className='days'>{planet.radius}</h2>
                        </div>
                        <div className='fact'>
                            <h4>AVERAGE TEMP.</h4>
                            <h2 className='days'>{planet.temperature}</h2>
                        </div>
                    </div>
                </div>)
            )}
        </div>
    );
}

export default Planet;
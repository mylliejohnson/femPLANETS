import "./App.css";
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import data from "./data.json"

import Planet from "./components/Planet";

import Mercury from "./components/Mercury";
import Venus from './components/Venus'
import Earth from './components/Earth'
import Mars from './components/Mars'
import Jupiter from './components/Jupiter'
import Saturn from './components/Saturn'
import Uranus from './components/Uranus'
import Neptune from "./components/Neptune";

function App(props) {

    let planets = {
        mercury: data[0],
        venus: data[1],
        earth: data[2],
        mars: data[3],
        jupiter: data[4],
        saturn: data[5],
        uranus: data[6],
        neptune: data[7]
    }



    return (
        <div>
            <Navbar />
            hello!!
            <Routes>
                <Route path='/Mercury' element={<Mercury />} />
                <Route path='/Venus' element={<Venus />} />
                <Route path='/Earth' element={<Earth />} />
                <Route path='/Mars' element={<Mars />} />
                <Route path='/Jupiter' element={<Jupiter />} />
                <Route path='/Saturn' element={<Saturn />} />
                <Route path='/Uranus' element={<Uranus />} />
                <Route path='/Neptune' element={<Neptune />} />
            </Routes>
        </div>
    );
}

export default App;


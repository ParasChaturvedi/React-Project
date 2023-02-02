import React from "react";
import {Routes,Route} from "react-router-dom";
import { Champ } from "./Cards";
import Detail, { Wow } from "./Detail";

const Main=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Champ/>}/>
            <Route path="/detail" element={<Wow/>}/>
        </Routes>
        </>
    );
};



export default Main;
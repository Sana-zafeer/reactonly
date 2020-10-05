import React, {Component} from "react";
import './rail.css';
import {homePage} from "../../mockdata";
import RailItem from "./railItem";


export default class Rail extends Component{
    render() {

        return <div className="rail-container">
            {
            homePage.railOnHome.map((currentValue,index)=>(
                <div key={index} className="rail-container">
                    <h3 className="rail">{currentValue.heading}</h3>
                    <div className="rail-cards-container">
                    <RailItem currentValue={currentValue}/>
                    </div>
                </div>
            ))
            }
        </div>
    }
}
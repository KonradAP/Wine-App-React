import React from "react";
import "./WineListHead.css"

export const WineListHead = () =>{

    return <thead className="list-head">
    <tr className="list-head-row">
        <th className="head-name">Name</th>
        <th className="head-vintage">Vintage</th>
        <th className="head-price">Price</th>
        <th className="head-button-space"></th>
    </tr>
    </thead>
}
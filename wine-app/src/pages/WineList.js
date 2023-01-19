import React, {useState} from "react";
import {WineListForm} from "../components/wineListComponents/WineListForm";
import {WineListList} from "../components/wineListComponents/WineListList";
import "./WineList.css"



export const WineList = () =>{

    const initialList = [
    ];

    const[wineList, setWineList] = useState(initialList)

    const getFormWine = wine =>{
        setWineList([...wineList, wine])

    }

    const removeWine = index =>{
        const reducedArray = [...wineList]
        reducedArray.splice(index, 1)
        setWineList(reducedArray)
    }


    return <div className="wine-list-screen">
        <div className="flex">
            <div className="form-area">
            <WineListForm getFormWine={getFormWine}/>
            </div>
            <div className="list-area">
            <WineListList wineList={wineList} removeWine={removeWine}/>
            </div>
        </div>
           </div>

};
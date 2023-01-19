import "./WineListList.css"
import {WineListListNode} from "./WineListListNode";
import {WineListHead} from "./WineListHead";
import {WineListBody} from "./WineListBody";

export const WineListList = ({wineList, removeWine }) => {

    return(<table className="wine-list">
        <WineListHead/>
        <WineListBody>
        {wineList.map((data, index) =>

            <WineListListNode key = {wineList[index].key}
                              name={wineList[index].name}
                              vintage={wineList[index].vintage}
                              price={wineList[index].price}
                              index={index}
                              removeWine={removeWine}/>)}
            </WineListBody>
    </table>)}
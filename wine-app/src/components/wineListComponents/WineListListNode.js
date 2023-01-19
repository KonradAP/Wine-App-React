
import "./WineListListNode.css"

export const WineListListNode = ({name,vintage,price,index, removeWine}) => {


    const clickHandler = () =>{
        removeWine(index)
    }

    return <tr className="wine-list-node">
        <td className="wine-name">{name}</td>
        <td className="wine-vintage">{vintage}</td>
        <td className="wine-price">{price}$</td>
        <td className="button-cell"><div  onClick={clickHandler} className="remove-button">x</div></td>
    </tr>
}
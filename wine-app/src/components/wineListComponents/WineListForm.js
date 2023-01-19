import React, {useState} from "react";
import "./WineListForm.css";

export const WineListForm = ({getFormWine}) =>{

    const [popupActive, setPopupActive] = useState(false)
    const [inputData, setInputData] = useState({
        key: 0,
        name: "",
        vintage: "",
        price: ""
    })
    const [keyValue, setKeyValue] = useState(1)
    const [nameRequired, setNameRequired] = useState(false)
    const [vintageRequired, setVintageRequired] = useState(false)
    const [priceRequired, setPriceRequired] = useState(false)

    const [nameRequiredPlaceholder, setNameRequiredPlaceholder] = useState(false)
    const [vintageRequiredPlaceholder, setVintageRequiredPlaceholder] = useState(false)
    const [priceRequiredPlaceholder, setPriceRequiredPlaceholder] = useState(false)

    const keyGenerator = () =>{setKeyValue((prev)=> prev +1)

    }

    const popupActivator = () => {
        setPopupActive((prev) => !prev)
    }

    const changeHandler = e =>{
        setInputData({...inputData, [e.target.name]:e.target.value})
        if(inputData.name !== "" || null){setNameRequired(true)}
        if(inputData.vintage !== "" || null){setVintageRequired(true)}
        if(inputData.price !== "" || null){setPriceRequired(true)}

    }

    const submitHandler = e => {
        e.preventDefault()
        if( nameRequired && vintageRequired  && priceRequired){
            keyGenerator()
        getFormWine(inputData)
        setInputData({
            key: keyValue,
            name: "",
            vintage: "",
            price: ""
        })
            setNameRequired(false)
            setVintageRequired(false)
            setPriceRequired(false)

            setNameRequiredPlaceholder(false)
            setVintageRequiredPlaceholder(false)
            setPriceRequiredPlaceholder(false)
        }
        if(!nameRequired){setNameRequiredPlaceholder(true)}
        if(!vintageRequired){setVintageRequiredPlaceholder(true)}
        if(!priceRequired){setPriceRequiredPlaceholder(true)}



    }
    return <div className="pop-up-form">
        <div onClick={popupActivator} className="material-symbols-outlined">add</div>
        { popupActive? <form className="wine-list-form"
              onSubmit={submitHandler}>
            <label className="wine-list-form-label">Wine name</label>
            <input className="wine-list-form-input"
                   type="text"
                   name="name"
                   onChange={changeHandler}
                   value={inputData.name}
                   placeholder={nameRequiredPlaceholder ? "Please enter name of the wine." : null }
                   />
            <label className="wine-list-form-label">Vintage</label>
            <input className="wine-list-form-input"
                   type="text"
                   name="vintage"
                   onChange={changeHandler}
                   value={inputData.vintage}
                   placeholder={vintageRequiredPlaceholder ? "Please enter vintage of the wine." : null }/>
            <label className="wine-list-form-label">Price</label>
            <input className="wine-list-form-input"
                   type="text"
                   name="price"
                   onChange={changeHandler}
                   value={inputData.price}
                   placeholder={priceRequiredPlaceholder ? "Please enter price of the wine." : null }/>
            <button className="wine-list-form-button" onClick="">Add Wine</button>
        </form> : null}
    </div>
}
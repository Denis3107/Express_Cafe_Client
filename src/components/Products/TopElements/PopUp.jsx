import React, {useEffect, useRef, useState} from 'react';

const PopUp = ({items, setSortAction, sortBy}) => {
    const [activePopup, setActive] = useState(false)
    const [activeItem, SetItem] = useState(sortBy.id)
    const element = useRef()
    const activeLabel = items[activeItem].name

    useEffect(()=>{
        document.body.addEventListener("click", clickBody)
    },[])

    function clickBody(event){
        if(!event.path.includes(element.current)){
            onClickPopUp(false)
        }

    }

    function onClickItem(index,item){
        SetItem(index)
        setSortAction({id:index,...item})
        onClickPopUp(false)
    }

    function onClickPopUp(status){
        setActive(status)
    }
    return (
        <div className="contentTop-Popup" ref = {element}>
            <strong className={activePopup ? "active":undefined}>△</strong>
            <b>Сортування :</b>
            <span onClick={()=> onClickPopUp(!activePopup)}>{activeLabel}</span>
            {activePopup && <div className="contentTop-Popup__popupBlock">
                <ul>
                    {
                        items && items.map((item, index) => (
                            <li key={`${item}_${index}`} className={activeItem === index ? "active" : undefined}
                                onClick={() => onClickItem(index,item)}>{item.name}</li>))
                    }
                </ul>
            </div>}
        </div>
    );
};

export default PopUp;
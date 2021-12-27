import React, {useState} from 'react';

const Categories = ({items, setCategoryAction, category}) => {

    const [active, SetActive] = useState(category)

    function onSetActive(index) {
        SetActive(index)
        setCategoryAction(index)
    }

    return (
        <div className="contentTop-categories">
            {
                items && items.map((item, index) => <li key={`${item}_${index}`}
                                                        className={active == index ? "active" : undefined}
                                                        onClick={() => onSetActive(index)}>{item}</li>)
            }
        </div>
    );
};

export default Categories;
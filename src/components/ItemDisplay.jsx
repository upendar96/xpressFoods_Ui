import React, { useState } from 'react';
import { itemData } from '../data';
import Banner from '../mlti/Banner';
import { FaExclamation } from 'react-icons/fa';


const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData);

    return (
        <>
        <h2>Eat what makes you happy  <FaExclamation size={40} color="#007bff" /> </h2>
        <div className="item-section">
            <div className="item-grid">
                {displayItem.map((item) => (
                    <div key={item.id} className="item-card">
                        <div className="card">
                            <img src={item.item_img} className="card-img" alt={item.item_name} />
                            <div className="card-body">
                                <p className="card-text">{item.item_name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Banner/>
        </>
    );
};

export default ItemsDisplay;

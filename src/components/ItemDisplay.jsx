import React, { useState } from 'react';
import { itemData } from '../data';


const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData);

    return (
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
    );
};

export default ItemsDisplay;

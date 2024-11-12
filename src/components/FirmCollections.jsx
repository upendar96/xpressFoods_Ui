import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";


const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [activeCategory, setActiveCategory] = useState('all');

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newFirmData = await response.json();
            setFirmData(newFirmData.vendors);
        } catch (error) {
            alert("Firm data not fetched");
            console.error("Firm data not fetched", error);
        }
    };

    useEffect(() => {
        firmDataHandler();
    }, []);

    const filterHandler = (region, category) => {
        setSelectedRegion(region);
        setActiveCategory(category);
    };

    return (
        <div className="firm-container">
            <h3 className="firm-title">Restaurants with online food delivery in Hyderabad</h3>
            <div className="filter-buttons">
                <button onClick={() => filterHandler("All", 'all')} className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}>All</button>
                <button onClick={() => filterHandler("South-Indian", 'south-indian')} className={`filter-btn ${activeCategory === 'south-indian' ? 'active' : ''}`}>South-Indian</button>
                <button onClick={() => filterHandler("North-Indian", 'north-indian')} className={`filter-btn ${activeCategory === 'north-indian' ? 'active' : ''}`}>North-Indian</button>
                <button onClick={() => filterHandler("Chinese", 'chinese')} className={`filter-btn ${activeCategory === 'chinese' ? 'active' : ''}`}>Chinese</button>
                <button onClick={() => filterHandler("Bakery", 'bakery')} className={`filter-btn ${activeCategory === 'bakery' ? 'active' : ''}`}>Bakery</button>
            </div>
            <section className="firm-section">
                {firmData.map((vendor) => vendor.firm.map((item) => {
                    if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                        return (
                            <div className="firm-card" key={item._id}>
                                <Link to={`/products/${item._id}/${item.firmName}`} className="firm-link">
                                    <div className="zoom-effect card">
                                        <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} className="card-img" />
                                        <div className="card-body">
                                            <div className="firm-offer">{item.offer}</div>
                                            <h5 className="card-title">{item.firmName}</h5>
                                            <p className="card-text">
                                                {item.region.join(", ")}
                                                <br />
                                                {item.area}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                    return null;
                }))}
            </section>
        </div>
    );
};

export default FirmCollections;

import React,{useState,useEffect} from 'react'
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const DineOut = () => {
    const [dineData, setDineData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [activeCategory, setActiveCategory] = useState('all');

    const dineDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-dines`);
            const newDineData = await response.json();
            setDineData(newDineData.dines);
        } catch (error) {
            alert("Firm data not fetched");
            console.error("Firm data not fetched", error);
        }
    };

    useEffect(() => {
        dineDataHandler();
    }, []);

    const filterHandler = (region, category) => {
        setSelectedRegion(region);
        setActiveCategory(category);
    };

    return (
        <div className="firm-container">
            <h3 className="firm-title">Restaurants You can dine out with your loved one's</h3>
            <div className="filter-buttons">
                <button onClick={() => filterHandler("All", 'all')} className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}>All</button>
                <button onClick={() => filterHandler("South-Indian", 'south-indian')} className={`filter-btn ${activeCategory === 'south-indian' ? 'active' : ''}`}>South-Indian</button>
                <button onClick={() => filterHandler("North-Indian", 'north-indian')} className={`filter-btn ${activeCategory === 'north-indian' ? 'active' : ''}`}>North-Indian</button>
                <button onClick={() => filterHandler("Chinese", 'chinese')} className={`filter-btn ${activeCategory === 'chinese' ? 'active' : ''}`}>Chinese</button>
                <button onClick={() => filterHandler("Bakery", 'bakery')} className={`filter-btn ${activeCategory === 'bakery' ? 'active' : ''}`}>Bakery</button>
            </div>
            <section className="firm-section">
                {dineData.map((vendor) => vendor.dine.map((item) => {
                    if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                        return (
                            <div className="firm-card" key={item._id}>
                                <Link to={`/products/${item._id}/${item.dineName}`} className="firm-link">
                                    <div className="zoom-effect card">
                                        <img src={`${API_URL}/uploads/${item.image}`} alt={item.dineName} className="card-img" />
                                        <div className="card-body">
                                            <div className="firm-offer">{item.offer}</div>
                                            <h5 className="card-title">{item.dineName}</h5>
                                            <p className="card-text">
                                                {/*{item.region.join(", ")}*/}
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


export default DineOut
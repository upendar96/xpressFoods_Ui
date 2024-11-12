import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MagnifyingGlass } from 'react-loader-spinner';
import { Link } from 'react-router-dom';


const Chains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = localStorage.getItem('userName');

    const vendorFirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newData = await response.json();
            setVendorData(newData);
            setLoading(false);
        } catch (error) {
            alert("Failed to fetch data");
            console.error("Failed to fetch data");
            setLoading(true);
        }
    }

    useEffect(() => {
        vendorFirmHandler();
    }, []);

    const handleScroll = (direction) => {
        const gallery = document.getElementById("chainGallery");
        const scrollAmount = 500;
        if (direction === "left") {
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behavior: "smooth"
            });
        } else if (direction === "right") {
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    }

    return (
        <>
            <div className="banner">
                <p className="bannerText">Hey! <h3>{username}</h3> Order food & groceries. Discover<br />best restaurants. XpressFoods it!</p>
            </div>
            <div className="mediaChainSection">
                {loading && (
                    <div className="loaderSection">
                        <div className="loader">Your content is Loading...</div>
                        <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="magnifying-glass-loading"
                            wrapperStyle={{}}
                            wrapperClass="magnifying-glass-wrapper"
                            glassColor="#c0efff"
                            color="#e15b64"
                        />
                    </div>
                )}
                {!loading && (
                    <>
                        <div className="btnSection">
                            <button className="btn" onClick={() => handleScroll("left")}>
                                <FaRegArrowAltCircleLeft className="btnIcons" />
                            </button>
                            <button className="btn" onClick={() => handleScroll("right")}>
                                <FaRegArrowAltCircleRight className="btnIcons" />
                            </button>
                        </div>
                        <h3 className="chainTitle">Top restaurants in Hyderabad</h3>
                        <section className="chainSection" id="chainGallery">
                            {vendorData.vendors && vendorData.vendors.map((vendor) => {
                                return (
                                    <div className="vendorContainer" key={vendor._id}>
                                        {vendor.firm.map((item) => {
                                            return (
                                                <div key={item._id} className="vendorBox">
                                                    <div className="chain-card">
                                                        <h5 className="card-title">{item.firmName}</h5>
                                                        <Link to={`/products/${item._id}/${item.firmName}`} className="link">
                                                            <div className="firmImage">
                                                                <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </section>
                    </>
                )}
            </div>
        </>
    );
}

export default Chains;

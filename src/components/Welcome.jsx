{/*import React,{useState} from 'react'
import ItemsDisplay from './ItemDisplay'
import Chains from './Chains'
import FirmCollections from './FirmCollections'
import TopBar from './TopBar'
import { Profile } from '../folders/Profile'
import MyWishlist from '../folders/Wishlist'
import Cart from '../folders/Cart'
import FooterPage from '../pages/footerPage'







const Welcome = () => {
  const [showProfile,setShowProfile]=useState(false);
  const [showItemDisplay,setShowItemDisplay]=useState(true);
  const [showChains,setShowChains]=useState(true);
  const [showFirmCollections,setShowFirmCollections]=useState(true);
  const [showWishlist,setShowWishlist]=useState(false);
  const [showCart,setShowCart]=useState(false);




  const profileHandler=()=>{
    setShowProfile(true);
    setShowItemDisplay(false);
    setShowChains(false)
    setShowFirmCollections(false);
    setShowWishlist(false)
    setShowCart(false)
    setShowFooter(false);
  }
  const itemDisplayHandler=()=>{
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowChains(true);
    setShowFirmCollections(true);
  }
  const chainsHandler=()=>{
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowChains(true);
    setShowFirmCollections(true);
  }
  const firmCollectionsHandler=()=>{
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowChains(true);
    setShowFirmCollections(true);
  }
  const wishlistHandler=()=>{
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowWishlist(true);
    setShowCart(false);
    setShowFooter(false);
  }
  const cartHandler=()=>{
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowCart(true);
    setShowWishlist(false)
    setShowFooter(false);
  }
    return (
    <>
    <div>
    <TopBar profileHandler={profileHandler} wishlistHandler={wishlistHandler} cartHandler={cartHandler}/>
        <div className="landingSection">
      {showItemDisplay&& <ItemsDisplay />}
      {showChains&& <Chains  />}
      {showFirmCollections&& <FirmCollections  />}
      
      {showProfile && <Profile  />}
      {showWishlist &&<MyWishlist/>}
      {showCart && <Cart/>}
      <FooterPage/>
          </div>



    </div>
    </>
  )
}

export default Welcome*

import React, { useState } from 'react';
import ItemsDisplay from './ItemDisplay';
import Chains from './Chains';
import FirmCollections from './FirmCollections';
import TopBar from './TopBar';
import { Profile } from '../folders/Profile';
import MyWishlist from '../folders/Wishlist';
import Cart from '../folders/Cart';
import FooterPage from '../pages/footerPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showItemDisplay, setShowItemDisplay] = useState(true);
  const [showChains, setShowChains] = useState(true);
  const [showFirmCollections, setShowFirmCollections] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const profileHandler = () => {
    setShowProfile(true);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowWishlist(false);
    setShowCart(false);
  };

  const itemDisplayHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowChains(true);
    setShowFirmCollections(true);
  };

  const wishlistHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowWishlist(true);
    setShowCart(false);
  };

  const cartHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowCart(true);
    setShowWishlist(false);
  };

  return (
    <>
      <div className=" welcome container">
        <div className="row">
          <div className="topBar  col-12">
            <TopBar profileHandler={profileHandler} wishlistHandler={wishlistHandler} cartHandler={cartHandler} />
          </div>
        </div>
        <div className="landingSection row mt-3">
          {showItemDisplay && (
            <div className="col-md-10">
              <ItemsDisplay />
            </div>
          )}
          {showChains && (
            <div className="col-12">
              <Chains />
            </div>
          )}
          {showFirmCollections && (
            <div className="col-12">
              <FirmCollections />
            </div>
          )}
          {showProfile && (
            <div className="col-12">
              <Profile />
            </div>
          )}
          {showWishlist && (
            <div className="col-12">
              <MyWishlist />
            </div>
          )}
          {showCart && (
            <div className="col-12">
              <Cart />
            </div>
          )}
        </div>
        <FooterPage />
      </div>
    </>
  );
};

export default Welcome;*/}

import React, { useState } from 'react';
import ItemsDisplay from './ItemDisplay';
import Chains from './Chains';
import FirmCollections from './FirmCollections';
import TopBar from './TopBar';
import { Profile } from '../folders/Profile';
import MyWishlist from '../folders/Wishlist';
import Cart from '../folders/Cart';
import FooterPage from '../pages/footerPage';
import SearchBar from '../search/SearchBar';

const Welcome = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showItemDisplay, setShowItemDisplay] = useState(true);
  const [showChains, setShowChains] = useState(true);
  const [showFirmCollections, setShowFirmCollections] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const profileHandler = () => {
    setShowProfile(true);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowWishlist(false);
    setShowCart(false);
  };

  const itemDisplayHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowChains(true);
    setShowFirmCollections(true);
  };

  const wishlistHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowWishlist(true);
    setShowCart(false);
  };

  const cartHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowChains(false);
    setShowFirmCollections(false);
    setShowCart(true);
    setShowWishlist(false);
  };

  return (
    <>
      <div className="welcome">
        
          <TopBar profileHandler={profileHandler} wishlistHandler={wishlistHandler} cartHandler={cartHandler} />
       
       
          <SearchBar />
       
      
          {showItemDisplay && <ItemsDisplay />}
            
          {showChains && (<Chains/>)}
          {showFirmCollections && (
           
              <FirmCollections />
           
          )}
          {showProfile && (
           
              <Profile />
            
          )}
          {showWishlist && (
           
              <MyWishlist />
          
          )}
          {showCart && (
           
              <Cart />
            
          )}
           <FooterPage />
        </div>
       
    
    </>
  );
};

export default Welcome;



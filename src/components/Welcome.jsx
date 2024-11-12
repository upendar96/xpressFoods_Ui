

import React, { useState } from 'react';
import ItemsDisplay from './ItemDisplay';
import Chains from './Chains';
import FirmCollections from './FirmCollections';
import TopBar from './TopBar';
import { Profile } from '../folders/Profile';
import MyWishlist from '../folders/Wishlist';
import Cart from '../folders/Cart';
import FooterPage from '../pages/FooterPage';
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



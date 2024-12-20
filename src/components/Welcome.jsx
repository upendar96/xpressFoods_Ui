

import React, { useState } from 'react';
import ItemsDisplay from './ItemDisplay';
//import FirmCollections from './FirmCollections';
import TopBar from './TopBar';
import { Profile } from '../folders/Profile';
import MyWishlist from '../folders/Wishlist';
import Cart from '../folders/Cart';
import FooterPage from '../pages/FooterPage';
import SearchBar from '../search/SearchBar';
import Cards from '../mlti/WelcomeCard';

const Welcome = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showItemDisplay, setShowItemDisplay] = useState(true);
 
 // const [showFirmCollections, setShowFirmCollections] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const profileHandler = () => {
    setShowProfile(true);
    setShowItemDisplay(false);
    setShowFirmCollections(false);
    setShowWishlist(false);
    setShowCart(false);
    setShowFooter(true)
  };

  const itemDisplayHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(true);
    setShowFirmCollections(true);
  };

  const wishlistHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowFirmCollections(false);
    setShowWishlist(true);
    setShowCart(false);
    setShowFooter(true)
  };

  const cartHandler = () => {
    setShowProfile(false);
    setShowItemDisplay(false);
    setShowFirmCollections(false);
    setShowCart(true);
    setShowWishlist(false);
    setShowFooter(false)
  };
  const footerHandler=()=>{
    setShowFooter(true)
  }

  return (
    <>
      <div className="welcome">
        
          <TopBar profileHandler={profileHandler} wishlistHandler={wishlistHandler} cartHandler={cartHandler} />
       
       
          <SearchBar />
       
      
          {showItemDisplay && <ItemsDisplay />}
            
         
          {/*{showFirmCollections && (
           
              <FirmCollections />
           
          )}*/}
          <Cards/>
          {showProfile && (
           
              <Profile />
            
          )}
          {showWishlist && (
           
              <MyWishlist />
          
          )}
          {showCart && (
           
              <Cart />
            
          )}

         { showFooter && <FooterPage />}
          
        </div>
        
    
    </>
  );
};

export default Welcome;



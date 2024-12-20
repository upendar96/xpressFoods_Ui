{/*import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle,FaShoppingCart, FaHeartbeat, FaSearch } from 'react-icons/fa';
import Search from '../search/Search';

const TopBar = ({profileHandler,wishlistHandler,cartHandler}) => {
    
  
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to={'/Cart'} className='link'>
            <h2>XpressFoods</h2>
            </Link>
        </div>
        <Search/>

        <div className='userAuth'>
            
            <h1 onClick={cartHandler}>  <div className="profile-icon">
        <FaShoppingCart size={10} color="171F2F" />
      </div> </h1>
            <h1 onClick={wishlistHandler}> <div className="profile-icon">
        <FaHeartbeat size={10} color="171F2F" />
      </div> </h1>
            <h1 onClick={profileHandler}>  <div className="profile-icon">
        <FaUserCircle size={10} color="171F2F" />
      </div></h1>
            
        
            
        </div>
        
   </section>
  )
}

export default TopBar



import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaHeartbeat } from 'react-icons/fa';
import Search from '../search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';


const TopBar = ({ profileHandler, wishlistHandler, cartHandler }) => {
    return (
        <div className='top1barSection container'>
            <div className="row justify-content-center ">
              
              <div className='navbar col-12'>
                    <Link to={'/'} className="link">
                        <h2 className="companyTitle text-white text-bold">XpressFoods</h2>
                    </Link>
                    
                    
                    <Search />
                 
                    <a className=""onClick={cartHandler}>
                        <FaShoppingCart size={20} color="white" />
                    </a>
                    <a className="" onClick={wishlistHandler}>
                        <FaHeartbeat size={20} color="white" />
                   </a>
                    <a className="" onClick={profileHandler}>
                        <FaUserCircle size={20} color="white" />
                    
                </a>
                </div>
            </div>
            </div>
       
    );
}

export default TopBar;*/}

import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../extra/DropDown';



const TopBar = () => {
    return (
        <div className='topBarSection'>
            <div className="topBarContainer">
                <div className='logo'>
                    <Link to='/welcome' className="link">
                        <h2 className="companyTitle">XpressFoods</h2>
                    </Link>
                </div>
                <Dropdown/>
                
            </div>
        </div>
    );
};

export default TopBar;


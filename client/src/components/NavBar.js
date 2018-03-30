import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from'styled-components'

const NavBar =styled.div`
display:flex;
justify-content:space-around;
align-items: center;
width:100vw;
padding: 15px 2.5vw;
background:lightcoral;

`

const Nav = () => {
        return (  
            <NavBar>
                <h1>Driftrs Lounge</h1>
                
                
      <div>
        <div><Link to="/">Cities</Link></div>
        <div><Link to="/CityView/3">City View</Link></div>
      </div>
                
            </NavBar>
        ) 
    }


export default Nav;
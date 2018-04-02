import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from'styled-components'
import { injectGlobal } from "styled-components";



injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great');
`


const NavBar =styled.div`
font-family: 'Fredericka the Great', cursive;
color: blue;
display:flex;
justify-content:space-around;
align-items: center;
width:100vw;
padding: 15px 2.5vw;
background:pink;
`

const Nav = () => {
        return (  
            <NavBar>
               
                <h1>Driftrs Lounge</h1>
                
                
      <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/CityView/3">City View</Link></div>
      </div>
      
            </NavBar>
        ) 
    }

    
   


export default Nav;
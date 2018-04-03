import React, { Component } from 'react';
import styled from 'styled-components';




const NavStyle = styled.div`
.nav-wrapper {
    background-color: rgb(0, 230, 184);
    .brand-logo, .right { 
        font-size: 37.5px;
        color: whitesmoke;
        font-family: Philosopher;
}

 a  {
    font-size: 25px;
    font-family: EB Garamond;

    background-color: rgb(0, 230, 184);
} 
}
`
class NavBar extends Component {

    render() {
        return (
            <NavStyle>
                
                <nav>
             {/* NavBar content         */}
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo right">Driftr Lounge</a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a id="NavBarCities">Cities</a></li>
                            {/* <li><a href="/">Posts</a></li> */}
                            
                            <li ><a id="NavBarAbout">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </NavStyle>
        );
    }
}

export default NavBar;
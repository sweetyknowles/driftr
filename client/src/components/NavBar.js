import React, { Component } from 'react';
import styled from 'styled-components';
const NavStyle = styled.div`
.nav-wrapper {
    background-color: rgb(0, 230, 184);
    .brand-logo, .right { 
        font-family: Philosopher;
}
li {
    font-family: EB Garamond
} 
}
`
class NavBar extends Component {

    render() {
        return (
            <NavStyle>
                <nav>

                    <div class="nav-wrapper">
                        <a href="http://localhost:3000/" class="brand-logo right">Driftr Lounge</a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="/">Cities</a></li>
                            {/* <li><a href="/">Posts</a></li> */}
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>

            </NavStyle>
        );
    }
}

export default NavBar;
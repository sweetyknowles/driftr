import React, { Component } from 'react';
import styled from 'styled-components';
const NavStyle = styled.div`
.nav-wrapper {
    background-color: seagreen;
}
`
class NavBar extends Component {

    render() {
        return (
            <NavStyle>
                <nav>

                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo right">Driftr Lounge</a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="sass.html">Cities</a></li>
                            <li><a href="badges.html">Posts</a></li>
                            <li><a href="collapsible.html">About</a></li>
                        </ul>
                    </div>
                </nav>

            </NavStyle>
        );
    }
}

export default NavBar;
import React, { Component } from 'react';
import styled from 'styled-components'

const IntroBoxLander= styled.img`
border: 4px solid rgba(234, 234, 234, 0.4);
width: 100vw;
height: 75vh;

`


class Intro extends Component {
    render() {
        return (
            <div>
                <img src="https://i.imgur.com/GBy3i0O.jpg" alt="drift lander"/>
                <h3>not all who wander are lost. dirftr is an application developed for the wanderer in all of us. scroll down to find out more. </h3>
            </div>
        );
    }
}

export default Intro;
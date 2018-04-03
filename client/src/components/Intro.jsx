import React, { Component } from 'react';
import styled from 'styled-components'


const IntroBoxLander= styled.div`
#LanderImg {
border: 4px solid rgba(234, 234, 234, 0.4);
min-width: 100vw;
max-height: 95vh;
}
`


class Intro extends Component {
    render() {
        return (
            <div>
                <IntroBoxLander>
                <img id="LanderImg"src="https://i.imgur.com/bwVjZFm.jpg" alt="drift lander"/>
                </IntroBoxLander>
               
               
            </div>
        );
    }
}

export default Intro;
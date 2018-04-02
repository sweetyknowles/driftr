import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const LinkStyle = styled.div`
h4 {
font-family: Philosopher;
}
p {
font-family: EB Garamond;
font-size: 25px;
}
`

class About extends Component {
    render() {
        return (
            <LinkStyle>
                <h4>About Driftr App</h4>
                <p>Driftr is a travel blogging application created by three students from General Assembly. </p>
                    <br/>
                   <p> Driftr enables it users to write about places they have traveled to, and share what they have written with friends and family. </p>
            </LinkStyle>
        );
    }
}

export default About;
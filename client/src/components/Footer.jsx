import React, { Component } from 'react';
import styled from 'styled-components';


const FooterStyle = styled.div`


.page-footer  {
    background-color: rgb(0, 230, 184);
}
    .white-text, .right { 
        font-size: 37.5px;
        color: whitesmoke;
        font-family: Philosopher;
}

 a  {
    font-size: 25px;
    font-family: EB Garamond;
    background-color: rgb(0, 230, 184);
} 

`


class Footer extends Component {
    render() {
        return (
            <div >

            <FooterStyle>
               
                    <footer id="FooterDude" class="page-footer">
                        <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                    <h5 class="white-text">about driftr.</h5>
                                    <p id="FootTarget" class="grey-text text-lighten-4">driftr is a travel blogging application created by murphy potts, sweety knowles and cody pellom.
                                     driftr is part of general assembly's wdi14 project 4. driftr enables it users to write about places they have
                                     traveled to, and share what they have written with friends and family. users can create their own listing, or choose from cities
                                 from around the world.</p>
                                </div>
                                <div class="col l4 offset-l2 s12">
                                    <h5 class="white-text">contact us.</h5>
                                    <ul>
                                        <li>sweetyjames.knowles@gmail.com</li>
                                        <li>paulpellom@gmail.com</li>
                                        <li>mpotts0201@gmail.com</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="container">
                                © 2018 driftr
            <a class="grey-text text-lighten-4 right" href="#!"></a>
                            </div>
                        </div>
                    </footer>
                
            </FooterStyle>
            </div>
        );
    }
}

export default Footer;
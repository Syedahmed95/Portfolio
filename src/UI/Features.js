import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styling/styling.css"
const Features = (props) => {
    const [condtional, setCondtional] = useState(false)
    const animationEnd = (event) => {
        setCondtional(true)
        props.animationEnd(true)
    }
    return (
        <div style={{ "marginTop": "30px" }}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="animated-box in textStyle" onAnimationEnd={animationEnd}>
                            {
                                condtional ?
                                    <div className="typewriter" style={{ "color": "white", "marginTop": "10px", "marginLeft": "10px", "paddingLeft": "2px", "paddingTop": "15px" }}>
                                        <h3 style={{ "textDecoration": "underline" }}>Projects:</h3>

                                        <h5>Digital Degree System : Final Year Project (IPFS Based)</h5>
                                        <p>-University Degree issuance moved to digital system with the help of IPFS to be access from anywhere securely.</p>
                                        <p style={{ "lineHeight": "15px" }}>-Created the backend for this system on Node.JS.</p>
                                        <p>-Coordinate with team members to fulfil the requirements of the system. </p>

                                        <h5>Video And Voice Communication (WebRTC) <span><a href="https://nest-screen-share.herokuapp.com/">Link</a></span></h5>
                                        <p>-Peer to Peer Connection established with the help of WebRTC.</p>
                                        <p style={{ "lineHeight": "15px" }}>-It allows you to connect using voice or video.</p>
                                        <p>-Made this application with the help of Node.JS, Express.JS, Socket-IO, and WebRTC. </p>

                                        <h5>E-Commerence Basic (CRUD) <span><a href="https://demo-auction.herokuapp.com/">Link</a></span></h5>
                                        <p>-It allows the user to add items to the listing of website. A user can buy directly or bid on a item</p>
                                        <p style={{ "lineHeight": "15px" }}>-It is a basic crud WebApp</p>

                                        <h5>Random Color (React.JS) <span><a href="https://syedahmed95.github.io/Color-Match/">Link</a></span></h5>
                                        <p>-It is created with the help of React.JS.</p>

                                        <h5>E-Commerence (React.JS) <span><a href="https://syedahmed95.github.io/E-Shop/">Link</a></span></h5>
                                        <p>-Single page website design with help of React.JS and Bootstrap</p>
                                    </div> : <div></div>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
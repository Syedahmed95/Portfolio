import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styling/styling.css"
const ExpAndSKills = (props) => {
    function animationEnd(event) {
        console.log("Animation End", event)
    }
    const animationStart = props.animationStart.animationStart
    return (
        <div style={{ "marginTop": "35px" }}>
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{ "borderStyle": "dashed", "borderColor": "blue", "borderWidth": "5px", "height": "300px" }}>
                            {
                                animationStart ?
                                    <div className='typewriter' onAnimationEnd={animationEnd}>
                                        <div style={{ "color": "white", "marginTop": "10px", "textDecoration": "underline", "marginLeft": "10px" }}>
                                            <h3>
                                                Experience:
                                            </h3>
                                            <h4>
                                                Cloud Primero (Back-End Developer)
                                            </h4>
                                        </div>

                                        <h5 style={{ "color": "white", "marginTop": "10px", "marginLeft": "10px" }}>
                                            (2022 - Present)
                                        </h5>
                                        <div style={{ "color": "white", "marginTop": "10px", "textDecoration": "underline", "marginLeft": "10px" }}>
                                            <h4>
                                                Queno (Node.Js Developer)
                                            </h4>
                                        </div>
                                        <h5 style={{ "color": "white", "marginTop": "10px", "marginLeft": "10px" }}>
                                            (2019 - 2022)
                                        </h5>
                                    </div> :
                                    <div></div>
                            }
                        </div>
                    </Col>
                    <Col>
                        <div style={{ "borderStyle": "dashed", "borderColor": "blue", "borderWidth": "5px", "height": "300px" }}>
                            {
                                animationStart ?
                                    <div style={{ "color": "white", "marginTop": "10px", "textDecoration": "underline", "marginLeft": "10px" }} className='typewriter'>
                                        <h3>
                                            Skills:
                                        </h3>
                                        <Row>
                                            <Col>
                                                <ul style={{ "fontSize": "15px" }}>
                                                    <li>JavaScript</li>
                                                    <li>Node.JS</li>
                                                    <li>MongoDB</li>
                                                    <li>Mongoose</li>
                                                    <li>MySQL</li>
                                                    <li>RabbitMQ</li>
                                                    <li>FireBase</li>
                                                    <li>ReactJs</li>
                                                    <li>Kotlin</li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul style={{ "fontSize": "15px" }}>
                                                    <li>MicroServices</li>
                                                    <li>Redis</li>
                                                    <li>Docker</li>
                                                    <li>Git</li>
                                                    <li>AWS</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>EJS</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div> :
                                    <div></div>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpAndSKills
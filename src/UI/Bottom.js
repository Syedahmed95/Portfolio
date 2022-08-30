import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styling/styling.css"
const Bottom = (props) => {
    const animationStart = props.bottomAnimationStart.animationStart
    return (
        <div>
            {
                animationStart ?
                    <div style={{ "marginTop": "55px" }}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <div style={{ "borderStyle": "dashed", "borderColor": "blue", "borderWidth": "5px", "height": "130px" }}>
                                        <div className="typewriter textStyle" style={{ "color": "white", "marginTop": "10px", "marginLeft": "10px" }}>
                                            <h3 style={{ "textDecoration": "underline" }}>Contact:</h3>
                                            <h5>Email: syedahmed9781@gmail.com</h5>
                                            <h5>Resume: <span><a href="https://drive.google.com/file/d/13diCGVUrxw1Rojuzjno8bRZPAMEhjhez/view?usp=sharing">Link</a></span></h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> : <div></div>
            }
        </div>
    )
}

export default Bottom
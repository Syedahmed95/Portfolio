import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styling/styling.css"
const Header = (props) => {
    let [cursor, setcursor] = useState("typewriter")
    const headerAnimation = (event) => {
        console.log("Header", event)
        setcursor("")
        props.animationCheck(true)
    }
    return (
        <div style={{ "marginTop": "30px" }}>
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{ "borderStyle": "dashed", "borderColor": "blue", "borderWidth": "5px", "height": "100px" }}>
                            <div style={{ "textAlign": "center" }}>
                                <div style={{ "display": "inline-block" }} className={cursor} onAnimationEnd={headerAnimation}>
                                    <h2 className="textStyle" style={{ "color": "white", marginTop: "revert" }}>Name - Syed Ahmed</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
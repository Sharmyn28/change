import React from "react";
import { Grid, Row } from "react-bootstrap";
import Menu from "../Menu/Menu";
import View from "./View";


const Home = () => {
    return(
        <Grid fluid id='homeView--content'>
            <Row>
                <Menu />
                <View />
            </Row>
        </Grid>
    )
}

export default Home;
import React, {Component} from "react";
import Rappels_list from "./rappels_list";
import Calendar_component from "./calendar_component";
import {rappelsData} from "../utils/all_rappels";
 import {Col, Container, Row} from "react-bootstrap"
import {Grid} from '@material-ui/core';


class Patient_view extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            data: rappelsData
        }

    }

    setProps = (data) => {
        this.setState({ data : data});
    }


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Rappels_list data ={this.state.data}  setProps={this.setProps}/>
                <Calendar_component rappels_data ={this.state.data}/>

            </Grid>


        );
    }
}


export default Patient_view;

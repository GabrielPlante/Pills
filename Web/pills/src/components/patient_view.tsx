import React, {Component} from "react";
import Rappels_list from "./rappels_list";
import Calendar_component from "./calendar_component";
import {rappelsData} from "../utils/all_rappels";
import {Grid} from '@material-ui/core';
import Small_patient_view from "./small_patient_view";


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
                <Rappels_list                 style={styles.container}
                                              data ={this.state.data}  setProps={this.setProps}/>
                <Calendar_component                 style={styles.container}
                                                    rappels_data ={this.state.data}/>
            </Grid>


        );
    }
}


export default Patient_view;

const styles ={
    container: {
        flex: 1,
        marginTop: 20,
    }
};

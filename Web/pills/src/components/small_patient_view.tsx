import React, {Component} from "react";
import {BottomNavigation, BottomNavigationAction, Grid} from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import AlarmIcon from '@material-ui/icons/Alarm';
import TodayIcon from '@material-ui/icons/Today';
import Rappels_list from "./rappels_list";
import Calendar_component from "./calendar_component";
import {rappelsData} from "../utils/all_rappels";
import Rappel from "./rappel_component";
class Small_patient_view extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            value : 'Rappel',
            data: rappelsData
        }
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(event,value) {
        this.setState({value :value})
    }

    setProps = (data) => {
        this.setState({ data : data});
    }

    close = (text:string, item) => {
        const i = this.state.data.indexOf(item)
        const tmp = this.state.data
        tmp.splice(i,1)
        this.setState({data :tmp})
    }


    render() {
        const {value} = this.state;

        return (
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                { this.state.value === 'Rappel' &&
                    /*<Rappels_list data ={this.state.data}  setProps={this.setProps}/>*/
                    <div>
                        <h1 style={styles.title}>Ma prochaine prise</h1>
                        <Rappel  item = {this.state.data[0]}  close={this.close}> </Rappel>
                    </div>
                }
                {this.state.value === 'Calendrier' &&
                    <div>
                        <h1 style={styles.title}>Mon calendrier</h1>
                        <Calendar_component rappels_data={this.state.data}/>
                    </div>

                }

                <footer style={styles.footer}>
                    <BottomNavigation value={value} onChange={this.handleChange} showLabels >
                        <BottomNavigationAction label="Rappel" value="Rappel" icon={<AlarmIcon />}  />
                        <BottomNavigationAction label="Calendrier" value="Calendrier" icon={<TodayIcon />} />
                    </BottomNavigation>
                </footer>
            </Grid>
        );
    }
}


export default Small_patient_view;

const styles={
    footer:{
        position:"fixed" as "fixed",
        bottom: "0",
    },
    title:{
        textAlign:"center" as "center"
    }
}

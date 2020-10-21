import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {rappelsData} from "../utils/all_rappels"
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";


class Calendar_component extends Component<any,any> {
    state = {
        date: new Date(),
    }

    onChange = date => {
        this.setState({ date })
        //console.log(date.toLocaleDateString())
    }

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                /><br/>
                <ListGroup>
                    {rappelsData.filter( (v) => { return v.jour === this.state.date.toLocaleDateString()} )
                        .map((data) =>
                        <ListGroup.Item>

                            <Container>
                                <Row style={styles.title}> <text >{data.heure}</text></Row>
                                <Row ><List>
                                    {data.medicaments.map((m) =>
                                        <ListItem >
                                            <ChevronRightIcon />
                                            <ListItemText
                                                style={styles.textStyle}
                                                primary={m.medicament}
                                            />
                                        </ListItem>
                                    ) }
                                </List>
                                </Row>
                                <Row style={styles.textStyle}><text>{data.indications}</text> </Row>
                            </Container>
                            <br/><hr/>
                        </ListGroup.Item>
                    ) }
                </ListGroup>
            </div>
        );
    }
}

export default Calendar_component;

const styles ={
    container: {
        flex: 1,
        marginTop: 20,
    },
    textStyle: {
        textAlign: "center" as "center",
    },
    title:{
        textAlign: "center" as "center",
        fontWeight: "bold" as "bold",
        fontSize: "1.5rem",
    }
};

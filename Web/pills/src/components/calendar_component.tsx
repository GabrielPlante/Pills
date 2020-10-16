import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {rappelsData} from "../utils/all_rappels"
import {Col, Container, ListGroup, Row} from "react-bootstrap";


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
                                <Row> <text>{data.heure}</text></Row>
                                <Row>{data.medicaments.map((m) =>
                                    <Col><text>{m.medicament}</text> </Col> ) } </Row>
                                <Row><text>{data.indications}</text> </Row>
                            </Container>
                            <br/>
                        </ListGroup.Item>
                    ) }
                </ListGroup>
            </div>
        );
    }
}

export default Calendar_component;

import React, {Component} from "react";
import SendToDoctor from "./sendToDoctor_component";
import {Col, Container, Row, Alert} from "react-bootstrap";


class Rappel extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            send: false,
        }
    }

    handleClick = () => {
        this.setState({send : false });

        this.props.close('', this.props.item)
    }

     sendToDoctor = () => {
        this.setState({send : !this.state.send })
    }

    sendText = (text:string) => {
        this.setState({send : false });
        this.props.close(text, this.props.item)
}

    render() {
        return (
            <Container>
                <Row className="text-center" > <text >{this.props.item.jour}</text> </Row>

                <Row> <text>{this.props.item.heure}</text></Row>
                <Row>{this.props.item.medicaments.map((m) =>
                    <Col><text>{m.medicament}</text> </Col> ) } </Row>
                <Row><text>{this.props.item.indications}</text> </Row>
                { (this.props.item.jour === "16/10/2020" && this.props.item.heure === "8h00")&&
                    <div>
                        <div>
                            <button onClick={this.handleClick}>Valider la prise de médicaments</button>
                            <button onClick={this.sendToDoctor}>Annuler la prise de médicaments</button>
                        </div>
                        <div>
                            {this.state.send &&
                            <SendToDoctor send={this.sendText}/>
                            }
                        </div>
                    </div>
                }

            </Container>

        );
    }
}


export default Rappel;

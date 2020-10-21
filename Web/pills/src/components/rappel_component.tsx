import React, {Component} from "react";
import SendToDoctor from "./sendToDoctor_component";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


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
        alert("Votre prise de médicament a bien été validée")
    }

     sendToDoctor = () => {
        this.setState({send : !this.state.send })
    }

    sendText = (text:string) => {
        this.setState({send : false });
        this.props.close(text, this.props.item)
        alert("Votre report de prise de médicament a bien ét pris en compte")

    }

    render() {
        return (
            <Container>
                <Row style={styles.title}> <text>{this.props.item.jour}</text> </Row>

                <Row style={styles.title}> <text>{this.props.item.heure}</text></Row>
                <Row ><List>
                    {this.props.item.medicaments.map((m) =>
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
                <Row style={styles.textStyle}><text>{this.props.item.indications}</text></Row><br/>
                { (this.props.item.jour === "16/10/2020" && this.props.item.heure === "8h00")&&
                    <div>
                        <div>
                            <Button onClick={this.handleClick}
                                    variant="contained"
                                    color="primary"
                                    size="large"

                                    startIcon={<CheckCircleOutlineIcon />}
                                    style={styles.button}
                            >
                                Valider la prise de médicaments
                            </Button>
                            <Button onClick={this.sendToDoctor}
                                    variant="contained"
                                    color="secondary"
                                    size="large"

                                    startIcon={<CancelIcon />}
                                    style={styles.button}
                            >
                                Annuler la prise de médicaments
                            </Button>

                        </div>
                        <div>
                            {this.state.send &&
                            <SendToDoctor style={styles.send} send={this.sendText}/>
                            }
                        </div>
                    </div>
                }

            </Container>

        );
    }
}


export default Rappel;

const FONT_SIZE = 24;
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
    },
    button:{
        marginRight:"8px",
        marginLeft:"8px",

    },
    send:{
        justifyContent:"center" as "center",
        alignItems: "center" as "center"
    }
};



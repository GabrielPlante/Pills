import React, {Component} from "react";
import rdv from "../class/rdv";
import { Card} from "@material-ui/core";
import {Button} from "react-bootstrap";
import RdvDetails from "./rdvDetails_component";


class M_rdvs extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state ={
            rdvs : [
                new rdv('Ajourd\'hui','14h00','17h05','Boris'),
                new rdv('Ajourd\'hui','18h00','21h05','Jocelyne'),

                new rdv('Demain','07h30','8h45','Rayan'),
                new rdv('26/10/2020','14h05','16h45','Stephanie')
            ]
        }
    }

    render() {
        return(
            <RdvDetails rdvs={this.state.rdvs}></RdvDetails>
        );
    }
}
export default M_rdvs;
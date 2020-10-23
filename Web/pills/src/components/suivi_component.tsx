import {Component} from "react";
import { Table} from "react-bootstrap";
import React from "react";
import {Grid} from "@material-ui/core";
import {suiviData} from "./../utils/all_suivi"


function renderMedicaments(props){
    return(
        <Table>
            <tbody>
                <tr>
                    <td>
                        {props.nom}
                    </td>
                    <td>
                        {props.dose}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}


function renderTraitement(props){
    return(
        <Table>
            <thead>
                <tr>{props.nom}: {props.periode}</tr>
            </thead>
            <tbody>

            <tr>
                {props.medicaments.map((item)=>renderMedicaments(item))}
            </tr>

            </tbody>
        </Table>
    )
}
class Suivi_component extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state={
            suivi: props.suivi
        }
    }
    render(){
        return (
            <Grid>
                <div> {this.props.suivi.Image} </div>
                <Table>
                    <tbody>
                    <tr> {this.props.suivi.traitement.map((item)=>renderTraitement(item))}</tr>
                    </tbody>
                </Table>
            </Grid>

        )
    }
}
export default Suivi_component;
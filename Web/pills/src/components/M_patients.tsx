import React, {Component} from "react";
import {Container,Button} from "@material-ui/core";
import { Row, Table} from "react-bootstrap";
import ReactDOM from "react-dom";
import Suivi_view from "../suivi_view";
import SoignantHeader from "./soignant_header";

function redirectToAddPrescription(props){
    return (
        ReactDOM.render(
            <React.StrictMode>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
function redirectToSuivi(props){
    return (
        ReactDOM.render(
            <React.StrictMode>
                <Suivi_view props={props.Nom}></Suivi_view>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

function renderItem(props){
    return(

        <tr >
            <td><img src={props.Image}/></td>
            <td>{props.Nom}</td>
            <td>{props.Adresse}</td>
            <td>{props.Age}</td>
            <td><Button onClick={()=>redirectToAddPrescription(props)} variant="contained" color="secondary" size="small">Ajouter +</Button></td>
            <td><Button onClick={()=>redirectToSuivi(props)} variant="contained" color="secondary" size="small">Suivi ...</Button></td>
        </tr>
    )
}

class M_patients extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            value:props.patients
        }
    }
    render(){
        return (
            <div>
                <Table striped bordered hover>

                    <tbody>
                    {this.props.patients.map((item)=>renderItem(item))}
                    </tbody>
                </Table>

            </div>


        )
    }
}
export default M_patients;
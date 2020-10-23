import React, {Component, ReactElement} from "react";
import Patient from "../class/patient";

function RenderPatients(props){
    return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <text>{props.patient}</text>
                        </td>

                        <td>
                            <button onClick={()=>props.visuNotif(props.patient)}>
                                <text>{props.notifs} notifs</text>
                            </button>
                        </td>

                        <td>
                            <button onClick={()=>props.addPrescription(props.patient)}> Ajouter une Prescription</button>
                        </td>

                        <td>
                            <button onClick={()=>props.visuPrescription(props.patient)}>Mes prescriptions</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
}


class MesPatients extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state={
            value: this.props.patients
        }
    }

    addPrescription(i){

    }
    visuPrescription(i){

    }
    visuNotif(i){

    }

    render() {
        return null
    }
}
export default MesPatients;
import React from 'react';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ReactDOM from "react-dom";
import M_rdvs from "./M_rdvs";
import M_prescriptions from "./M_prescriptions";
import M_patients from "./M_patients";
import {patientsData} from "../utils/all_patients";
import Rdv_view from "../rdv_view";

function renderMesPatients(){
    return (
        ReactDOM.render(
            <React.StrictMode>
                <M_patients patients={patientsData} />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
function renderMesPrescriptions(){
    return (
        ReactDOM.render(
            <React.StrictMode>
                <M_prescriptions />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
function renderMesRDVs(){
    return (
        ReactDOM.render(
            <React.StrictMode>
                <Rdv_view />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

const SoignantHeader = (props) => {
    return (
        <Container style={styles.container}>

            <div >
                <Button onClick={()=>renderMesPatients()}
                    variant="contained"
                    color="primary"
                    size="large"

                    style={styles.button}
                >
                    MES PATIENTS
                </Button>

                <Button onClick={()=>renderMesPrescriptions()}
                    variant="contained"
                    color="primary"
                    size="large"

                    style={styles.button}
                >
                    MES PRESCRIPTIONS
                </Button>
                <Button onClick={()=>renderMesRDVs()}
                    variant="contained"
                    color="primary"
                    size="large"

                    style={styles.button}
                >
                    MES RDV
                </Button>
            </div>

        </Container>
    );
}

const styles = {
    container:{
        alignItems: "center" as "center"

    },
    button:{
        marginRight:"8px",
        marginLeft:"8px",

    },
}

export default SoignantHeader;
import React from 'react';
import './App.css';
import RdvDetails from "./components/rdvDetails_component";
import rdv from "./class/rdv";
import Patient from "./class/patient";
import MesPatients from "./components/mesPatients_component";
import SoignantHeader from "./components/soignant_header";
import M_patients from "./components/M_patients";
import {patientsData} from "./utils/all_patients"


function MenuSoignant() {
    const rdvs = [
        new rdv('Ajourd\'hui','14h00','17h05','Boris'),
        new rdv('Ajourd\'hui','18h00','21h05','Jocelyne'),

        new rdv('Demain','07h30','8h45','Rayan'),
        new rdv('26/10/2020','14h05','16h45','Stephanie')
    ]
    const patients = [
        new Patient('Boris',5),
        new Patient('David',2),
        new Patient('Rayan',1),
        new Patient('Rachelle',3)
    ]
    const detailsRdv = <RdvDetails rdvs={rdvs}></RdvDetails>
    const listPatients = <MesPatients patients={patients}></MesPatients>
    const listP = <M_patients patients={patientsData}></M_patients>
    return (

        <div>
            <div>
                <SoignantHeader></SoignantHeader>
            </div>

            <div className="App">
                <ul>{listP}</ul>
                <ul>{listPatients}</ul>
            </div>

        </div>

    );
}
export default MenuSoignant;

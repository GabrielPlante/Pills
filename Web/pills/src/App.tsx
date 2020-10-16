import React from 'react';
import './App.css';
import RdvDetails from "./components/rdvDetails_component";
import Patient_view from "./components/patient_view";
import Authentification from "./authentification";


class rdv{
    debut:String;
    fin: String;
    patient: String;
    constructor(d,f,p){
        this.debut=d;
        this.fin=f;
        this.patient =p;
    }
}

function App() {

    const rdvs = [
        new rdv('11h00','12h05','rayan'),
        new rdv('16h05','18h05','boris'),
        new rdv('18h05','20h45','david')
    ]

    const detailsRdv = <RdvDetails rdvs={rdvs}></RdvDetails>



    return (

    <div className="App">
        <Patient_view/>
    </div>

);
}

export default App;

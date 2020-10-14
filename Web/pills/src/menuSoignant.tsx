import React from 'react';
import './App.css';
import RdvDetails from "./components/rdvDetails_component";

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

function MenuSoignant() {
    const rdvs = [
        new rdv('11h00','12h05','rayan'),
        new rdv('16h05','18h05','boris'),
        new rdv('18h05','20h45','david')
    ]
    const detailsRdv = <RdvDetails rdvs={rdvs}></RdvDetails>
    return (
        <div className="App">
            <ul>{detailsRdv}</ul>
        </div>

    );
}
export default MenuSoignant;

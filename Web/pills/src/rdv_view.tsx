import rdv from "./class/rdv";
import RdvDetails from "./components/rdvDetails_component";
import SoignantHeader from "./components/soignant_header";
import React from "react";

function Rdv_view (){
    const rdvs = [
        new rdv('Ajourd\'hui','14h00','17h05','Boris'),
        new rdv('Ajourd\'hui','18h00','21h05','Jocelyne'),

        new rdv('Demain','07h30','8h45','Rayan'),
        new rdv('26/10/2020','14h05','16h45','Stephanie')
    ]
    const detailsRdv = <RdvDetails rdvs={rdvs}></RdvDetails>
    return (

        <div>
            <div>
                <SoignantHeader></SoignantHeader>
            </div>

            <div className="App">
                <ul>{detailsRdv}</ul>
            </div>

        </div>
    )
}
export default Rdv_view;
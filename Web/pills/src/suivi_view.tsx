import React, {Component} from "react";
import Suivi_component from "./components/suivi_component";
import {Grid} from "@material-ui/core";
import {suiviData} from "./utils/all_suivi"

function Suivi_view (props){
    let p={};
    const patient = suiviData.map((item)=>{if(item.Nom==props.props){p= item}})
    const listSuivi= <Suivi_component suivi={p}></Suivi_component>
    return(
        <div>
            <ul>{listSuivi}</ul>
        </div>
    )
}
export default Suivi_view;
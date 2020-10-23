import React, {Component} from "react";
import Suivi_component from "./suivi_component";
import {suiviData} from "../utils/all_suivi";

class M_prescriptions extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state={
            suivi: suiviData.slice()
        }

    }
    render(){
        return null
    }
}
export default M_prescriptions;
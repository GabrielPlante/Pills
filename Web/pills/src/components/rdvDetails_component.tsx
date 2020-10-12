import React, {Component} from "react";
import "./rdvDetails_style.css"

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
class RdvDetails extends Component<any, any>{

    constructor(props) {
        super(props);
    }

    cancelRdv(){

    }

    render() {
        return(
            <div >
                <table>
                    <tr>
                        <td className="debut">
                            <text> {this.props.debut} - </text>
                        </td>
                        <td className="fin">
                            <text> {this.props.fin} : </text>
                        </td>

                        <td className="patient">
                            <text> {this.props.patient} </text>
                        </td>

                        <td className="annulerRdv" >
                            <text className="delButton" onClick={()=>this.cancelRdv()}> X</text>
                        </td>

                    </tr>
                </table>
            </div>
        );
    }
}
export default RdvDetails;

import React, {Component} from "react";
import "./rdvDetails_style.css"
import rdv from "../class/rdv";


function RenderRdv(props){
    return (
        <table>
            <tbody>
            <tr > <td colSpan={4}> <text>{props.jour}</text></td></tr>
            <tr>
                <td className="debut">
                    <text> {props.debut} - </text>
                </td>
                <td className="fin">
                    <text> {props.fin} : </text>
                </td>

                <td className="patient">
                    <text> {props.patient} </text>
                </td>

                <td className="annulerRdv" >
                    <button className="delButton"  onClick={()=> props.onClick()}> X</button>
                </td>
            </tr>

            </tbody>
        </table>
    )
}

class RdvDetails extends Component<any, any>{

    constructor(props) {
        super(props);
        this.state ={
            value:this.props.rdvs
        }
    }

    cancelRdv(i){
        console.log("click canceling")
        let newArray = this.state.value.slice()
        this.setState(
            {
                value: newArray.filter(item=>item.debut!==i.debut).slice()
        })
    }

    render() {
        return(
            this.state.value.map((item:rdv)=>
                <div>
                    <RenderRdv jour={item.jour} debut={item.debut} fin={item.fin} patient={item.patient} onClick={()=>this.cancelRdv(item)}>
                    </RenderRdv>
                </div>)
        );
    }
}
export default RdvDetails;

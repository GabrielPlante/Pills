import React from "react"
import MenuPatient from "./menuPatient";
import MenuSoignant from "./menuSoignant";
import App from "./App";
import ReactDOM from "react-dom";

function redirectToPatient(){
    console.log("redirecting to Patient...")
    return (
        ReactDOM.render(
            <React.StrictMode>
                <MenuPatient />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
function redirectToSoignant(){
    console.log("redirecting to Soignant...")
    return (
        ReactDOM.render(
            <React.StrictMode>
                <MenuSoignant />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

function Authentification (){

    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        <button onClick={()=>redirectToPatient()}>
                            PATIENT
                        </button>
                    </td>

                    <td>
                        <button onClick={()=>redirectToSoignant()}>
                            SOIGNANT
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Authentification
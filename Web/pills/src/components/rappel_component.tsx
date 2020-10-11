import React, {Component} from "react";
import SendToDoctor from "./sendToDoctor_component";



class Rappel extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            text : this.props.text ,
            show :false
        }
    }

    handleClick = () => {
        console.log('Button on click');
    }

     sendToDoctor = () => {
        this.setState({show : !this.state.show })
    }

    render() {
        return (
            <div>
                <div>
                    <text>{this.state.text}</text>
                </div>
                <div>
                    <button onClick={this.handleClick}>Valider la prise de médicaments</button>
                    <button onClick={this.sendToDoctor}>Annuler la prise de médicaments</button>
                </div>
                <div>
                    {this.state.show &&
                        <SendToDoctor></SendToDoctor>
                    }
                </div>
            </div>

        );
    }
}


export default Rappel;

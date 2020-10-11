import React, {Component} from "react";
import Voice_Recorder from "./test";

class SendToDoctor extends Component<{},any> {


    constructor(props) {
        super(props);
        this.state = {
            voice :false ,
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.VoiceChangeText = this.VoiceChangeText.bind(this)

    }

    voice_recorder = () => {
        this.setState({voice : !this.state.voice})
    }

    send = () => {
            console.log(this.state.value)
    }

    handleChange(event) {
        this.setState({value:  event.target.value});
    }

    VoiceChangeText(text){
        this.setState({value: text})
    }



    render() {
        return (
            <div>
                <div>
                    <textarea value={this.state.value} onChange={this.handleChange} />

                </div>
                <div>
                    <button onClick={this.voice_recorder}> Utiliser l'enregistrement vocal</button>
                    {this.state.voice &&
                    <Voice_Recorder  onTextChange={this.VoiceChangeText}/>
                    }
                    <button onClick={this.send}> Envoyer</button>
                </div>

            </div>
        );
    }
}


export default SendToDoctor;

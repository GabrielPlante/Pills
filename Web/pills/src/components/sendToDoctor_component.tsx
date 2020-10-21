import React, {Component} from "react";
import Voice_Recorder from "./test";

class SendToDoctor extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            voice :false ,
            value : '',
            placeholder: "Tapez votre texte ici ou activez la reconnaissance vocale"
        }
        this.handleChange = this.handleChange.bind(this);
        this.VoiceChangeText = this.VoiceChangeText.bind(this);
        this.Voice_activate  = this.Voice_activate.bind(this)
    }

    voice_recorder = () => {
        this.setState({voice : !this.state.voice})
    }

    send = () => {
            this.props.send(this.state.value)
    }

    handleChange(event) {
        this.setState({value:  event.target.value});
    }

    VoiceChangeText(text){
        this.setState({value: text})
    }

    Voice_activate(event){

        if(!event){
            this.setState({placeholder:"Tapez votre texte ici ou activez la reconnaissance vocale"})
        }else {
            this.setState({placeholder:"Reconnaissance vocale activée"})

        }
    }



    render() {
        return (
            <div >
                <div style={styles.container}>
                    <textarea style={styles.textarea} value={this.state.value} onChange={this.handleChange}
                              placeholder={this.state.placeholder}/>
                </div>
                <div style={styles.container}>
                    <Voice_Recorder onTextChange={this.VoiceChangeText} Voice_activate={this.Voice_activate}/>
                    <button style={styles.element} onClick={this.send}> Envoyer</button>
                    {/*<button onClick={this.voice_recorder}> Utiliser l'enregistrement vocal</button>
                    {this.state.voice &&
                    <Voice_Recorder  onTextChange={this.VoiceChangeText}/>
                    }
                    */}
                </div>

            </div>
        );
    }
}


export default SendToDoctor;

const styles = {
    textarea: {
        marginRight:"0px",
        marginLeft:"13px",
        width:"90%",
        height: 50
    },
    container:{
        flex: 1,
        marginTop: 30,
    },
    element:{
        marginTop: 20,
        marginLeft: "42%"
    }
}

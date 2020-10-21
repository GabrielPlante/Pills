import React, { useState, useEffect } from 'react'
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'fr-FR'

function Voice_Recorder(props) {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()          ;
            props.Voice_activate(true)
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop();
            props.Voice_activate(false)
            mic.onend = () => {
                console.log('Stopped Mic on Click')

            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            props.onTextChange(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    const clear = () => {
        props.onTextChange('')
    }

    return (
        <>
            <div style={styles.container}>
                    {isListening ? <span style={styles.element}>🎙️</span> : <span style={styles.element}>🛑🎙️</span>}
                {/*<button onClick={clear} disabled={!note}>
                        Clear
                    </button>*/}
                    <Button onClick={() => setIsListening(prevState => !prevState)}
                            style={styles.element}
                            variant="contained"
                            color={isListening? "secondary" :"primary"}
                            size="large"

                            startIcon={isListening? <MicIcon/>: <MicOffIcon />}
                    >
                    </Button>
            </div>
        </>
    )
}

export default Voice_Recorder

const styles = {
    container:{
        marginRight:"0",
        marginLeft:"36%",

    },
    element:{
        marginLeft:"8px"
    }
}

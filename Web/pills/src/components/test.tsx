import React, { useState, useEffect } from 'react'

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
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
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
            <div className="container">
                <div className="box">
                    {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
                    <button onClick={clear} disabled={!note}>
                        Clear
                    </button>
                    <button onClick={() => setIsListening(prevState => !prevState)}>
                        Start/Stop
                    </button>
                </div>
            </div>
        </>
    )
}

export default Voice_Recorder

import React from 'react';
import './App.css';
import Rappel from "./components/rappel_component";

function App() {
    const tmp = 'Nam in ante in ligula dictum consectetur non non mauris. Mauris nulla nunc, placerat ac sem vitae, ornare porta erat. Nulla facilisi. Phasellus feugiat maximus enim sed pretium. Fusce varius interdum convallis. Vestibulum pretium velit elit, blandit blandit erat interdum in. Sed pharetra diam quis lacinia finibus. Proin mattis arcu enim, quis laoreet elit pellentesque commodo. Donec semper scelerisque neque, in sollicitudin velit commodo eu. Sed vel sapien vitae purus gravida ornare. Phasellus maximus nibh et auctor hendrerit.\n' +
        '\n'
    const items = ['heure du rdv \n quelques indications: ' + tmp, 'heure du rdv \n quelques indications:'+ tmp
        , 'heure du rdv \n quelques indications:'+ tmp, 'heure du rdv \n quelques indications:'+ tmp, 'heure du rdv \n quelques indications:'+ tmp];

    const listItems = items.map((item) =>
        <Rappel text = {item}> </Rappel>
    );
  return (
    <div className="App">
        <ul>{listItems}</ul>
    </div>
  );
}

export default App;

import React from 'react';
import { noteSound } from './audios'
class ChordButton extends React.Component{
    constructor(props){
        super(props);
        this.playChord = this.playChord.bind(this);
    }
    
    playChord(chord){
        const scale = Object.keys(chord);
        scale.forEach((note) => 
            
             !chord[note] ? noteSound[note].play() : null
        );
    };
    
    render(){
        return (
            (this.props.chords.length == 0) ? <div>{'No chords added yet'}</div> :
        <div id={'chordButton'}>
            {this.props.chords.map((chord,i) => <button key={`chord ${i}`} onClick={() => this.playChord(chord)} className={'btn btn-dark btn-lg'}>{'Play'}</button>)}
        </div>
            
        )
    }
};

export default ChordButton;

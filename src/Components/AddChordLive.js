import React from 'react';
import {Audios, majorKeys} from './audios'; // colocar os mp3 das notas


class AddChordLive extends React.Component{
    constructor(props){
        super(props);
        this.arrangeSelect = this.arrangeSelect.bind(this);
        this.sendKey = this.sendKey.bind(this);
        this.addChord = this.addChord.bind(this);
        this.toggleKey = this.toggleKey.bind(this);
    };
    arrangeSelect(){
        return ['Major Key', ...Object.keys(majorKeys)] 
    }
    sendKey(event){
        if (event.target.value != 'Major Key'){
            let scale = {}
            majorKeys[event.target.value].map((note) =>scale[note] = true )
            
            this.props.dispatchNotes(scale);
            this.props.dispatchKey(event.target.value)    
        }
        
    }
    addChord(){
        let scale = {}
        this.props.sendChord(this.props.notes);
        majorKeys[this.props.majorKey].map((note) =>scale[note] = true )
        this.props.dispatchNotes(scale)
        
    };
    toggleKey(element){
        let scale = {...this.props.notes};
            scale[element.target.textContent] = !scale[element.target.textContent];
        this.props.toggleNote(scale);
    }
    
    
    render(){
        return <div id={'livechord'}>
            <div className={'row'}>
                <div className={'col-xs-3'}>
                    <h5>{'Select a key:'}</h5>
                    <select onChange={this.sendKey} name={'Major Keys'} id={'selectKey'}>
                    {this.arrangeSelect().map((el) => <option key={el}>{el}</option>)}
                    </select>
                </div>
                <div className={'col-xs-3'}>
                    <h5>{Object.keys(this.props.notes).map((note) => <button onClick={this.toggleKey} className={this.props.notes[note] ? 'btn btn-primary': 'btn btn-secondary btn-lg'} key={note}>{note}</button>)}</h5>
                </div>
                <div className={'col-xs-3'}>
                    <button onClick={this.addChord} className={'btn btn-primary'}>{'Add Live Chord'}</button>
                </div>
            </div>
        </div>
    }
};

export default AddChordLive;

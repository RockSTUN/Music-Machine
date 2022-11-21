import React from 'react';
import Audios from './audios';
import $ from 'jquery';

class Box extends React.Component {
    constructor(props){
        super(props);
        //bind functions
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    handleTime(audio){
        if (audio.ended == false){
            audio.currentTime = 0;
        }
        return audio
    };
    handleKeyPress(event){
//          console.log(event) barar de espaço: 32
        switch(event.keyCode){
            case 81: // Q
                this.handleTime(Audios.openHiHat).play();
                break;
            case 87: // W
                this.handleTime(Audios.pedalHiHat).play();
                break;
            case 69: // E
                this.handleTime(Audios.closedHat).play();
                break;
            case 65:// A
                this.handleTime(Audios.hiTom).play();
                break;
            case  83:// S
                this.handleTime(Audios.midTom).play();
                break;
            case 68:// D
                this.handleTime(Audios.lowTom).play();
                break;
            case 90:// Z
                this.handleTime(Audios.kick).play();
                break;
            case 88:// X
                this.handleTime(Audios.snare).play();
                break;
            case 67: // C
                this.handleTime(Audios.clap).play();
                break;
            default: 
                return;
        }
        
        
    };
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress)
    };
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress)
    }
  
    
    render(){
        return <div id="DRUMS">
                
        </div>
    }
}


export default Box;

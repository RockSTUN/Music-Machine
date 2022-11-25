import React from 'react';
import { Audios } from './audios';
import $ from 'jquery';
import 'jquery-ui/ui/effect';
class Box extends React.Component {
    constructor(props){
        super(props);
        //bind functions
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    handleTime(element){
        const audio = document.getElementById(element)
        $(audio.parentElement).animate({opacity: 0},25, function () {$(this).animate({opacity: 1},this.lastChild.duration*1000/2);})
        if (audio.ended == false){
            audio.currentTime = 0;
            audio.play();
        }else {
            audio.play();
        }
        //action
        this.props.dispatchDisplay(document.getElementById(element).parentElement.id);
    };
    handleKeyPress(event){
//          console.log(event) barar de espaço: 32
        switch(event.keyCode){
            case 81: // Q
                this.handleTime('Q')
                break;
            case 87: // W
                this.handleTime('W');
                break;
            case 69: // E
                this.handleTime('E');
                break;
            case 65:// A
                this.handleTime('A');
                break;
            case 83:// S
                this.handleTime('S');
                break;
            case 68:// D
                this.handleTime('D');
                break;
            case 90:// Z
                this.handleTime('Z');
                break;
            case 88:// X
                this.handleTime('X');
                break;
            case 67: // C
                this.handleTime('C');
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
        return <div className={'container-fluid'} id={"drum-machine"}>
        <h3>{'Live Drum'}</h3>
            <div className={'row'}>
                <div className={'col-xs'}>
                    <button onClick={() => this.handleTime('Q')} id='Open Hi Hat' className={'btn btn-dark drum-pad'}>{'Q'}
                        <audio id ={'Q'} className={'clip'} src={Audios.openHiHat.src}>
                        </audio>
                    </button>
                    <button onClick={() => this.handleTime('W')} id='Pedal Hi Hat' className={'btn btn-dark drum-pad'}>{'W'}
                        <audio id ={'W'} className={'clip'} src={Audios.pedalHiHat.src}></audio>
                    </button>
                    <button onClick={() => this.handleTime('E')} id='Closed Hat' className={'btn btn-dark drum-pad'}>{'E'}
                        <audio id ={'E'} className={'clip'} src={Audios.closedHat.src}></audio>
                    </button>
                </div>
                
                <div className={'col-xs'}>
                    <button onClick={() => this.handleTime('A')} id='Hi Tom' className={'btn btn-dark drum-pad'}>{'A'}
                        <audio id ={'A'} className={'clip'} src={Audios.hiTom.src}></audio>
                    </button>
                    <button onClick={() => this.handleTime('S')} id='Mid Tom' className={'btn btn-dark drum-pad'}>{'S'}
                        <audio id ={'S'} className={'clip'} src={Audios.midTom.src}></audio>
                    </button>
                    <button onClick={() => this.handleTime('D')} id='Low Tom' className={'btn btn-dark drum-pad'}>{'D'}
                        <audio id ={'D'} className={'clip'} src={Audios.lowTom.src}></audio>
                    </button>
                </div>
                
                <div className={'col-xs'}>
                    <button onClick={() => this.handleTime('Z')} id='Kick' className={'btn btn-dark drum-pad'}>{'Z'}
                        <audio id ={'Z'} className={'clip'} src={Audios.kick.src}></audio>
                    </button>
                    <button onClick={() => this.handleTime('X')} id='Snare' className={'btn btn-dark drum-pad'}>{'X'}
                        <audio id ={'X'} className={'clip'} src={Audios.snare.src}></audio>
                    </button>
                    <button onClick={() => this.handleTime('C')} id='Clap' className={'btn btn-dark drum-pad'}>{'C'}
                        <audio id ={'C'} className={'clip'} src={Audios.clap.src}></audio>
                    </button>
                </div>
            </div>
            <div id={"display"}>{this.props.disp}</div>
        </div>
    }
}


export default Box;

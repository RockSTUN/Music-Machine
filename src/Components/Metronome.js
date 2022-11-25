import React, { useEffect } from 'react';
import { Audios, majorKeys } from './audios';
import $ from 'jquery';
import 'jquery-ui/ui/effect';
// console.log(jQuery)
//90 batimentos / min = 90 batimentos / 60 s = 






class Metronome extends React.Component {
    constructor(props){
        super(props)
        this.toggleM = this.toggleM.bind(this);
        this.animation = this.animation.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTempo = this.handleTempo.bind(this);
        this.gambiarra = this.gambiarra.bind(this);
        let interval = null;
    }
    
    handleClick(){
      this.props.lockInput(); 
    };
    handleTempo(event){
        function checkNumbers(sting,tempo){
                const tempoString = [...sting.matchAll(/\d*/g)].join('');
                
                return (tempoString != '') ? parseInt(tempoString) : tempo;
                
            }
            
            this.props.changeTempo(checkNumbers(event.target.value,this.props.tempo))
        
    }
    
   animation(stats){
       {
           
                    const animationTime = 60000/this.props.tempo;
                    if (stats){
                        $('#metronome').animate({
                            backgroundColor: '#ff0000',
                            opacity: 0
                        } , animationTime - (3/4)*animationTime, 'linear',function(){
                            $(this).animate({backgroundColor: '#0d6efd',opacity: 1}, (3/4)*animationTime)
                        },1000)
                        if (Audios.tamborine.ended){
                            Audios.tamborine.play();
                        }
                        else{
                            Audios.tamborine.currentTime = 0;
                            Audios.tamborine.play();
                        }
                    }
//                     
                }
};
gambiarra(){
    if (!this.props.togStatus){
            this.interval = setInterval (() => this.animation(this.props.togStatus), 60000/this.props.tempo);
        }else{
           clearInterval(this.interval) 
           
//                         $('#metronome').toggleClass('btn-primary')
                    }
        
}
    
    toggleM(){
        this.props.toggleMetro() 
        this.gambiarra()
            }
    
        
    
    
    
    render(){
        const auxiliar = this.props.tempo
        
        return <div id={'capa'}>
            <button  id={'metronome'} className={'btn btn-primary'} onClick={this.toggleM} >
                <div >{!this.props.togStatus ? this.props.tempo : 'Turn Off'}</div>
            </button>
            <div>
            <input placeholder={this.props.tempo} disabled={this.props.lock ? 'disabled' : null} id={'tempoInput'} onChange={this.handleTempo} />
            <button id={'buttonLock'} className={'btn'} onClick={this.handleClick}> 
                {this.props.lock ? 'Unlock' : 'Lock'}
            </button>
        </div>
        </div>
    }
}


export default Metronome;

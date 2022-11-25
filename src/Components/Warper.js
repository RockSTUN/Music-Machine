import React, {setState} from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer, displayFns, metroFunctions, keyFunctions, chordFunctions } from './reduxfns'
// import  './Style/styles.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';

//Components:
//DRUMS
import Box from './Box';
//TEMPO
import Metronome from './Metronome';
//CHORDS
import AddChordLive from './AddChordLive';
import ChordButton from './ChordButton';


const store = createStore(reducer);

//Connect
const BoxConnected = connect(displayFns.mapStateToProps,displayFns.mapDispatchToProps)(Box)
const MetronomeConnected = connect(metroFunctions.mapStateToProps, metroFunctions.mapDispatchToProps)(Metronome)
const ChordLiveConnected = connect(keyFunctions.mapStateToProps,keyFunctions.mapDispatchToProps)(AddChordLive)
const ChordButtonConnected = connect(chordFunctions.mapStateToProps)(ChordButton)

//Wraper
class Warper extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        
        
        return  <Provider store={store}>
        <h1>{'Music Machine'}</h1>
        <div className={'container-fluid'}>
        <h3>{'Metronome:'}<MetronomeConnected /></h3>
        <div className='row'>
            <div  className={'col-xl-2'}>
                <div className={'row'}>
                    <div className={'col-xs-2'}>
                        <BoxConnected />
                    </div>
                    <div className={'col-xs-2'}>
                        <ChordButtonConnected />
                    </div>
                </div>
            </div>
            <div className={'col-xl-2'}>
                <ChordLiveConnected />
            </div>        
        </div>
    </div>
                </Provider>
    };
    
};

export default Warper;

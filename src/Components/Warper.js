import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import  './Style/styles.css';
import $ from 'jquery';
import Box from './Box'
//Components:
//Rhythm
//Harmony
//Melody

// const INITIAL_STATE= {
//     chords: []
// }

// //Reducer
// function reducer(state=INITIAL_STATE, action){
//         
// };
//Redux:
//Store:
// const store = createStore(reducer)
// 


//Wraper
class Warper extends React.Component {
    constructor(props){
        super(props)
        
    };
    
    
    render(){
        return <div id='warper'>
           <Box />
        </div>
    };
    
};

export default Warper;

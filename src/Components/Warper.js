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

const INITIAL_STATE= {
    disp: ''
}

function changeDisplay(soundName){
    
    return {
        type: 'CHANGE_DISPLAY',
        newDisplay: soundName
    }
}


//Reducer
function reducer(state=INITIAL_STATE, action){
    
    switch(action.type){
        case 'CHANGE_DISPLAY':
            return {disp: action.newDisplay};
        default:
            return state
    }
};

//MAPSTATETOPROPS
function mapStateToProps(state){
    
    return {
        disp: state.disp
    }
};
//MAPDISPATCHTOPROPS
function mapDispatchToProps(dispatch){
    return {
        
        dispatchDisplay: soundName =>  {  dispatch(changeDisplay(soundName))}
    }
};
//Redux:
//Store:
const store = createStore(reducer);

//Connect
const BoxConnected = connect(mapStateToProps,mapDispatchToProps)(Box)

console.dir('STORE: ',store)
console.dir('STORE GETSTATE: ',store.getState())

//Wraper
class Warper extends React.Component {
    constructor(props){
        super(props)
        
    };
    
    
    render(){
        return <Provider store={store}>
           <BoxConnected />
        </Provider>
    };
    
};

export default Warper;

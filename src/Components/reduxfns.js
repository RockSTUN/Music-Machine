const INITIAL_STATE = {
    disp: '',
    togStatus: false,
    tempo: 120,
    lock: true,
    notes: {},
    chords:[],
    chord: {},
    majorKey: ''
}

//REDUCER
function reducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_DISPLAY':
            return {...state, disp: action.newDisplay}
        case 'TOGGLE_METRONOME':
            return {...state, togStatus: state.togStatus ? false : true}
        case 'CHANGE_TEMPO':
            return {...state, tempo: action.newTempo}
        case 'LOCK_TEMPO':
            return {...state, lock: !state.lock}
        case 'CHANGE_KEY': 
            return {...state, majorKey: action.newKey}
        case 'CHANGE_NOTES':
            return {...state, notes: action.newNotes}
        case 'TOGGLE_NOTE':
            return {...state, notes: {...action.newNoteChord}}
        case 'SEND_CHORD':
            return {...state, chords: [...state.chords,action.newChord]}
        default:
            return state
    }
};

//DRUMS
const displayFns = {
    mapStateToProps: function mapStateToPropsDISPLAY(state){
        return {
            disp: state.disp
        }
    },
    
    mapDispatchToProps : function mapDispatchToPropsDISPLAY(dispatch){
        return {
            
            dispatchDisplay: (soundName) =>  {  dispatch({type: 'CHANGE_DISPLAY', newDisplay: soundName})}    //action maker
        }
    }
}
//METRONOME
const metroFunctions = {
    mapStateToProps: function(state){
        return {
            tempo : state.tempo,
            togStatus: state.togStatus,
            lock: state.lock
        }
        
    },
    mapDispatchToProps: function(dispatch){
        return {
            toggleMetro: () => dispatch({ type: 'TOGGLE_METRONOME'}),
            changeTempo: (newTempo) => dispatch({ type: 'CHANGE_TEMPO', newTempo: newTempo }),
            lockInput: () => dispatch({type: 'LOCK_TEMPO'})
        }
    }
}
//Major Keys
const keyFunctions = {
    mapStateToProps: function(state){
        return {
            notes: state.notes,
            chord: state.chord,
            chords: state.chords,
            majorKey: state.majorKey
        }
    },
    mapDispatchToProps: function(dispatch){
        return {
            dispatchKey: (key) => dispatch({type: 'CHANGE_KEY', newKey: key}),
            dispatchNotes: (key) => dispatch({type: 'CHANGE_NOTES', newNotes: key }),
            toggleNote: (note) => dispatch({type: 'TOGGLE_NOTE', newNoteChord: note}),
            sendChord: (chord) => dispatch({type: 'SEND_CHORD', newChord: chord})
            
        }
    }
}

//CHORD BUTTON
const chordFunctions = {
    mapStateToProps: function(state){
        return {
            chords: state.chords
        }
    }
}

export { reducer, displayFns, metroFunctions, keyFunctions, chordFunctions};

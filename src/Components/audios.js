import tamborine from './Drums/tamborine.mp3';
import snare1 from './Drums/snare1.mp3';
import sideStick from './Drums/sideStick.mp3';
import rideBell from './Drums/rideBell.mp3';
import pedalHiHat from './Drums/pedalHiHat.mp3';
import openHiHat from './Drums/openHiHat.mp3';
import midTom from './Drums/midTom.mp3';
import lowTom from './Drums/lowTom.mp3';
import liteRide from './Drums/liteRide.mp3';
import liteCrash from './Drums/liteCrash.mp3';
import kick from './Drums/kick.mp3';
import hiTom from './Drums/hiTom.mp3';
import crash from './Drums/crash.mp3';
import clav from './Drums/clav.mp3';
import closedHat from './Drums/closedHat.mp3';
import clap from './Drums/clap.mp3';
import C from './Notes/C.mp3';
import D from './Notes/D.mp3';
import E from './Notes/E.mp3';
import F from './Notes/F.mp3';
import G from './Notes/G.mp3';
import A from './Notes/A.mp3';
import B from './Notes/B.mp3';

const Audios = {
    tamborine : new Audio(tamborine),
    snare: new Audio(snare1),
    sideStick: new Audio(sideStick),
    rideBell: new Audio(rideBell),
    pedalHiHat: new Audio(pedalHiHat),
    openHiHat: new Audio(openHiHat),
    midTom: new Audio(midTom),
    lowTom: new Audio(lowTom),
    liteRide: new Audio(liteRide),
    liteCrash: new Audio(liteCrash),
    kick: new Audio(kick),
    hiTom: new Audio(hiTom),
    crash: new Audio(crash),
    clav: new Audio(clav),
    closedHat: new Audio(closedHat),
    clap: new Audio(clap)
}

let majorKeys = {
    C: ['C','D','E','F','G','A','B']
};
let Sharps = [];
function getSharp(inp){
    let scale = [...inp]
    for (let i=0;i<5;i++){
    
       let aux = scale.splice(4);
        scale[scale.length-1] += '#'; 
        
        aux = aux.concat(scale);
        majorKeys[aux[0]] = aux;
        scale = [...aux]
    
    }
}
function getFlat(inp){
    let scale = [...inp]
    for (let i=0;i<6;i++){
    
        scale[scale.length-1] += 'b';
       let aux = scale.splice(3); 
        
        aux = aux.concat(scale);
        majorKeys[aux[0]] = aux;
        scale = [...aux]
    
    }
}

getSharp(majorKeys.C)
getFlat(majorKeys.C)

const noteSound = {
    C: new Audio(C),
    D: new Audio(D),
    E: new Audio(E),
    F: new Audio(F),
    G: new Audio(G),
    A: new Audio(A),
    B: new Audio(B)
}
export { Audios, majorKeys, noteSound };

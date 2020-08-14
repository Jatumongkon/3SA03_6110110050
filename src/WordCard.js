import React from 'react';
import ChraracterCard from './ChraracterCard';
export default function WordCard(props){

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) }
    return (
 <div>
{ Array.from(props.value).map((c, i) => 
    <ChraracterCard value={c} key={i} activationHandler={activationHandler}/>) }
 </div>
 );
}
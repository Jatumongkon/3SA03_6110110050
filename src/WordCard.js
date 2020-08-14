import React from 'react';
import ChraracterCard from './ChraracterCard';
export default function WordCard(props){
 return (
 <div>
{ Array.from(props.value).map((c, i) => <ChraracterCard value={c} key={i}/>) }
 </div>
 );
}
import React, {useEffect, useState} from 'react';
import zodiac from '../../data/zodiac';

function getSigns (props){
   
    let date = Math.floor(new Date(props).getTime() / 1000);
    let signs= [];
    zodiac.forEach((sign) => {
        if(date <= sign.end_date && date >= sign.start_date){
            
            signs.push(sign);
        }
    });
    
    console.log(signs);
}
export default getSigns;
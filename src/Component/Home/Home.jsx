import React, {} from 'react';
import Cardinfo from '../Cardinfo/Cardinfo';
import Heading from '../Heading.jsx/Heading';

export default function Home(){
    return(
        <div style={{background : 'red'}}>
            <div>
                <Heading/>
            </div>
            <div style={{background : 'black'}}>
                <Cardinfo />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
       
    )
}


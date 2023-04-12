import React from 'react'
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default () =>{
    return(
        <div className='newChat'>
            <div className='newChat-Head'>
                    <div className='newChat-Head-button'>
                        <ArrowBackIcon 
                        style={{ color: "#fff" , 
                        fontSize: 32}}/>
                    </div>
                    <div className='newChat-Head-Title'>
                        nova conversa
                    </div>
            </div>
            <div className='newChat-List'>

            </div>
        </div>
    );
}
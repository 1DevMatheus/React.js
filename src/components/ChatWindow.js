import React from 'react'
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import { DisabledByDefault } from '@mui/icons-material';

export default () =>{

    const handleEmojiClick = () =>{

    }

    return(
        <div className='chatWindow'>
            <div className="chatWindow-Header">
                <div className='chatWindow-Header-info'>
                    <img className='chatWindow-avatar' src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                    <div className='chatWindow-name'>Matthues olveira</div>
                </div>

                <div className='chatWindow-Header-buttons'>
                     <div className='chatWindow-btn'>
                        <SearchIcon  style={{color: '#54656f'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <MoreVertIcon style={{color: '#54656f'}}/>
                    </div>
                </div>
            </div>
            <div className="chatWindow-Body">
            </div>
                <div className='chatWindow-EmojiArea'>
                    <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    />
                </div>
            <div className="chatWindow-Footer">
                <div className='chatWindow-pre'>
                    <div className='chatWindow-btn'>
                         <InsertEmoticonIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                    <div className='chatWindow-btn'>
                         <CloseIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                    <div className='chatWindow-btn'>
                         <AttachFileIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                </div>
                <div className='chatWindow-inputArea'>
                    <input 
                    placeholder='Menssagem'
                    className='chatWindow-input' type="text" />
                </div>
                <div className='chatWindow-pos'>
                <div className='chatWindow-btn'>
                         <SendIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                </div>

            </div>

        </div>
    );
}
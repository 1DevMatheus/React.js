import React, {useState, useEffect, useRef} from 'react'
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
import MessageItem from './MessageItem';

export default ({user}) =>{

   const body = useRef();

    let recognition = null
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const [listening, setListening] = useState(false);
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }
    const [list, setList] = useState([
        {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'} ,{author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}, {author:123, body: 'bla bla bla'}
        ,{author:123, body: 'bla bla'}
        ,{author:1234, body: 'bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla'}]);


        useEffect(()=>{
            if(body.current.scrollHeight > body.current.offsetHeight){
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
            }
        },[list]);

    const handleEmojiClick = (e, emojiObject) =>{
        setText(text+e.emoji);
        console.log(e);
    }
  
 

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
   
    const handleMicClick = () =>{
        if(recognition !== null)
        {
            recognition.onstart = () =>{
                setListening(true);
            }
            recognition.onend = () =>{
                setListening(false);
            }
            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript);
                
            }

            recognition.start();
        }
    };
    const handleSendClick = ()=>{

    };

    const handleOpenEmoji = () =>{
        setEmojiOpen(true);
    }
    const handleCloseEmoji =() =>{
        setEmojiOpen(false);
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
            <div ref={body} className="chatWindow-Body">
                {list.map((item, key)=>(
                    <MessageItem
                    ket={key}
                    data={item}
                    user={user}
                    />
                ))}
            </div>
                <div className='chatWindow-EmojiArea' style={{height: emojiOpen? '350px' : '0px'}}>
                    <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    />
                </div>
            <div className="chatWindow-Footer">
                <div className='chatWindow-pre'>
                    <div className='chatWindow-btn'
                     onClick={handleCloseEmoji}
                     style={{width: emojiOpen? 40 : 0}}
                     >
                         <CloseIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                    <div className='chatWindow-btn' onClick={handleOpenEmoji}>
                         <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#54656f', fontSize: 32}}/>
                    </div>
                    <div className='chatWindow-btn'>
                         <AttachFileIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                </div>
                <div className='chatWindow-inputArea'>
                    <input 
                    placeholder='Menssagem'
                    className='chatWindow-input' 
                    type="text" 
                    value={text}
                    onChange={e=>setText(e.target.value)}/>
                </div>
                <div className='chatWindow-pos'>
               {text !== "" &&
                <div onClick={handleSendClick} className='chatWindow-btn'>
                         <SendIcon style={{color: '#54656f', fontSize: 32}}/>
                    </div>
                }
                {text === "" &&
                    <div onClick={handleMicClick} className='chatWindow-btn'>
                         <MicIcon style={{color: listening? '#126ece' : '#54656f', fontSize: 32}}/>
                    </div>
                }
                </div>

            </div>

        </div>
    );
}
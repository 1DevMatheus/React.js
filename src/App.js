import React, { useState, useEffect } from "react";
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat'

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import FilterListIcon from '@mui/icons-material/FilterList';
import { act } from "react-dom/test-utils";

export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'fulano de tal', image: 'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId: 2, title: 'fulano de tal', image: 'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId: 3, title: 'fulano de tal', image: 'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId: 4, title: 'fulano de tal', image: 'https://www.w3schools.com/w3images/avatar2.png'}

  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({id: 1234,name: 'matheus oliveira',avatar: 'https://github.com/1DevMatheus.png'});
  return (
    <div className="app-window">
      <div className="sidebar">
       <NewChat />
        <header>
          <img
            className="header-avatar"
            src={user.avatar}
          />
          <div className="header-buttons">
            <div className="header-btn">
              <GroupsIcon style={{ color: "#54656f" , fontSize: 32}} />
            </div>
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#54656f" , fontSize: 32}} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: "#54656f", fontSize: 32}} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#54656f" , fontSize: 32}} />
            </div>
          </div>
        </header>
        <div className="search">
           
          <div className="search-input">
             <SearchIcon fontSize="small" style={{ color: "#54656f" , fontSize: 35}} />
              <input type="search" placeholder="Procurar ou começar uma nova conversa"/>

           </div>
           <div className='filter-icon'>
               <FilterListIcon style={{ color: "#54656f"}} />
            </div>            
         
        </div>
        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem key={key}
            data={item}
            active={activeChat.chatId === chatList[key].chatId}
            onClick={()=>setActiveChat(chatList[key])} />
          ))}
        </div>
      </div>
      <div className="contentarea">
        
        {activeChat.chatId !== undefined &&
          <ChatWindow 
          user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        

      </div>
    </div>
  );
};

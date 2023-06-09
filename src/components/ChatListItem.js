import React from 'react'
import './ChatListItem.css'

export default ({onClick, active, data})=>{
    return(
        <div onClick={onClick}
        className={`chatListItem ${active?'active':''}`}>
            <img className="chatListItem-avatar" src={data.image} alt="" />

            <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className='chatListItem-name'>{data.title}</div>
                    <div className='chatListItem-date'>19:00</div>

                </div>
                <div className='chatListItem-line'>
                    <div className='chatListItem-lastMsg'>
                        <p>Opa, tudo bem? maksaskldjaksdklasjdkasjdkasjdasjdklasjdklasdjaskldjaskldjaskldjaklsjdalskjdlkasdklasjldkasjksajd</p>
                        </div>

                </div>
            </div>
        </div>
    );
}
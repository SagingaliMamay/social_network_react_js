import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + '' + style.active}>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:1,name:'Dimych'},
        {id:2,name:'Lena'},
        {id:3,name:'Igor'},
        {id:4,name:'Sasha'},
        {id:5,name:'Ivan'}
    ]

    {/*Refactoring dialogs data by using .map()*/}

let dialogsElements = dialogsData.map( dlg => 
    <DialogItem name={dlg.name} id={dlg.id} />

    
);

    let messageData = [
        {id:1,message:'Hi!'},
        {id:2,message:'I am a super coder!'},
        {id:3,message:'I am extremly disciplined!'},
        {id:4,message:'I create my life!'},
        {id:5,message:'I am a game changer!'}]

    let messagesElements = messageData.map(msg =>
        <DialogItem name={msg.message} id={msg.id}/>
        );
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
            {dialogsElements}
            </div>
            
            {/*Refactoring message data by using .map() */}

            <div className={style.messages}>
           
            {/* Here I use .map() method: -> .map() run over messageData & signe into 
            let message value from each element */}
              
              {messagesElements}
            </div>
        </div>




    )
}

export default Dialogs;
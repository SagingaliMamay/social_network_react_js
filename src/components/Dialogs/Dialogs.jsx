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
    let messageData = [
        {id:1,message:'Hi!'},
        {id:2,message:'I am a super coder!'},
        {id:3,message:'I am extremly disciplined!'},
        {id:4,message:'I create my life!'},
        {id:5,message:'I am a game changer!'}]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>


            <div className={style.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
                <Message message={messageData[3].message} id={messageData[3].id} />
                <Message message={messageData[4].message} id={messageData[4].id} />
            </div>
        </div>




    )
}

export default Dialogs;
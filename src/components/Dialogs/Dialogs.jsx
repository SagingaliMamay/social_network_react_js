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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Dimasik" id="1" />
                <DialogItem name="Lena" id="2" />
                <DialogItem name="Igor" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Ivan" id="5" />
            </div>


            <div className={style.messages}>
                <Message message="Hi Hi!" />
                <Message message="Super coder" />
                <Message message="Hello" />
            </div>
        </div>




    )
}

export default Dialogs;
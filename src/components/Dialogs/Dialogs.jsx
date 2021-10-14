import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItems/DialogItem';
import Message from './DialogItems/Messages/Message';


const Dialogs = (props) => {
    
    {/*Refactoring dialogs data by using .map()*/}

let dialogsElements = props.dialogsData.map( dlg => 
    <DialogItem name={dlg.name} id={dlg.id} />

    
);



    let messagesElements = props.messageData.map(msg =>
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
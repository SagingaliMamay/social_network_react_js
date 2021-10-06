import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
   // let path = "/dialogs/" + props.id;
    return(
        <div className={style.dialog + '' + style.active}>
                    
        <NavLink to ={"/dialogs/" + props.id}>{props.name}</NavLink>
     </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Dimasik" id ="1"/>
                
                <div className={style.dialog}>
                  <NavLink to ="/dialogs/2" >Lena</NavLink>  
                </div>
                <div className={style.dialog}>
                   <NavLink to ="/dialogs/3" >Igor</NavLink>
                </div>
                <div className={style.dialog}>
                  <NavLink to ="/dialogs/4" >Sasha</NavLink>
                </div>
                <div className={style.dialog}>
                  <NavLink to ="/dialogs/5" >Ivan</NavLink>
                </div>
           
            </div>
            <div className={style.messages}>
                    <div className={style.dialog}>Hi</div>


                    <div className={style.dialog}>Hello</div>


                    <div className={style.dialog}>Super coder</div>

                </div>    
        </div>
    )
}

export default Dialogs;
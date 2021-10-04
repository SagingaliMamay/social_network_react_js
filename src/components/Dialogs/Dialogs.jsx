import React from 'react';
import style from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    Dymich
                </div>
                <div className={style.dialog}>
                    Lena
                </div>
                <div className={style.dialog}>
                    Igor
                </div>
                <div className={style.dialog}>
                    Sasha
                </div>
                <div className={style.dialog}>
                    Ivan
                </div>
                <div className={style.messages}>
                    <div className={style.dialog}>Hi</div>


                    <div className={style.dialog}>Hello</div>


                    <div className={style.dialog}>Super coder</div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;
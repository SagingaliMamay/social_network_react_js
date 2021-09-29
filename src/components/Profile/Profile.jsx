import React from "react";
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;
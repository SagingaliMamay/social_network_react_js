import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (

        <div className={style.postBlock}>
            <h3>My posts</h3>

            <div className={style.comments}>
                <div>
                <textarea className=""></textarea>
                </div>
                <div>
                <button> Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="You are super React Developer" likeCounter="20" />
                <Post message="You are a really good learner" likeCounter="150" />
                <Post motivation="You are the most disciplened man" likeCounter="15" />
            </div>
        </div>
    )
}
export default MyPosts;
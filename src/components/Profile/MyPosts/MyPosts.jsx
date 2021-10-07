import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsData = [
        {id:1,post:'You are super React Developer',likes:150},
        {id:2,post:"You are a really good learner",likes:15},
        {id:3,post:'I am quick learner',likes:180}
    ];
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
                <Post message={postsData[0].post} id={postsData[0].id} likeCounter = {postsData[0].likes} />
                <Post message={postsData[1].post} id={postsData[1].id} likeCounter = {postsData[1].likes} />
                <Post message={postsData[2].post} id={postsData[2].id} likeCounter = {postsData[2].likes} />
            </div>
        </div>
    )
}
export default MyPosts;
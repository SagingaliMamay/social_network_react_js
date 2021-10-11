import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsData = [
        {id:1,post:'You are super React Developer',likes:150},
        {id:2,post:"You are a really good learner",likes:15},
        {id:3,post:'I am quick learner',likes:180},
        {id:3,post:'Bla bla',likes:180},
        {id:3,post:'la la la ',likes:180}
    ];
{/*Refactoring: posts data by .map()*/}
     
    let postsElements = postsData.map( pst =>
    <Post message={pst.post} id={pst.id} likeCounter = {pst.likes} /> );

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
            
             {/* appeareance on Display data of posts*/}

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
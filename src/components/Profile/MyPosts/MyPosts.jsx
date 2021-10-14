import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
{/*Refactoring: posts data by .map()*/}

    let postsElements = props.postsData.map( pst =>
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
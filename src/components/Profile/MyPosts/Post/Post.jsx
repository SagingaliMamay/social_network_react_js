import React from "react";
import style from './Post.module.css';

const Post = (props) => { // I define props here

    return (
        
        
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZnbypL5znsAcBxWHA435K4RcahXBINjg9A&usqp=CAU" /> 
            Post 1
            {props.message}
            {props.motivation}
            {props.massage}
            
            <div>
                <button className="like">Like</button> {props.likeCounter}
            </div>
            

        </div>
    )
}
export default Post;
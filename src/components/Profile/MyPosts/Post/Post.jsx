import React from "react";
import style from './Post.module.css';

const Post = () => {
    return (

        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZnbypL5znsAcBxWHA435K4RcahXBINjg9A&usqp=CAU" />
            Post 1

            <div>
                <button>Like</button>
            </div>

        </div>
    )
}

export default Post;
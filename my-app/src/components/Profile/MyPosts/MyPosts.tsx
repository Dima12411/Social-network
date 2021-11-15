import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <textarea name="post"></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' amount={15}/>
                    <Post message="It's my first posts" amount={20}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;
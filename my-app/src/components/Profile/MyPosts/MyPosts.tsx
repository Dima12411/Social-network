import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsProps = {
    state: ProfilePageType
}

const MyPosts = (props: MyPostsProps) => {


    let postsElements = props.state.posts.map(p => <Post message={p.message} amount={p.amount}/>)

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    new post
                </div>
                <div>
                    <div>
                        <textarea name="post"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;
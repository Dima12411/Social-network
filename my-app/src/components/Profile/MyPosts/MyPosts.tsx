import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType, PostType} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsProps) => {
    let postsElements = props.posts.map(p => <Post message={p.message} amount={p.amount}/>)
    let newPostElement: RefObject<HTMLTextAreaElement>  = React.createRef();
    let addPost = () => {
        let text = newPostElement.current?.value;
        if (text) props.addPost(text)
        if (newPostElement.current) newPostElement.current.value = ''
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    new post
                </div>
                <div>
                    <div>
                        <textarea ref={newPostElement} placeholder={'Write your message'}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post
                        </button>
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
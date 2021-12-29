import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.map(p => <Post message={p.message} amount={p.amount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) props.updateNewPostText(text)
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
                        <textarea ref={newPostElement}
                                  placeholder={'Write your message'}
                                  value={props.newPostText}
                                  onChange={onPostChange}
                        />
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
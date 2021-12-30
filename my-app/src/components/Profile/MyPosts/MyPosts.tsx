import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    dispatch: (action: any) => void
    newPostText: string
}

const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} amount={p.amount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }
    const onPostChange = () => {
        debugger;
        let text = newPostElement.current?.value;
        text ?
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text}) :
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: ''})
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
                                  value={props.newPostText}
                                  onChange={onPostChange}
                        />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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
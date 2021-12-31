import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    dispatch: (action: any) => void
    newPostText: string
}


const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} amount={p.amount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        text ?
            props.dispatch(updateNewPostTextAC(text)) :
            props.dispatch(updateNewPostTextAC(""))

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
import React from 'react';
import s from './Post.module.css';

type PostType = {
    id: number
    message: string
    amount: number
}

const Post = (props: PostType) => {
    return (
        <div key={props.id} className={s.item}>
            <img
                src="data:image/jpeg;base64,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"/>
            {props.message}
            <div>
                <span>like - {props.amount}</span>
            </div>

        </div>

    )
}

export default Post;
import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePagePropsType, updateNewPostText} from "../../redux/state";

type ProfileProps = {
    state: ProfilePagePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;
import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostType, ProfilePagePropsType} from "../../redux/state";

type ProfileProps = {
    state: ProfilePagePropsType
    dispatch: (action: ActionsTypes) => void

}

const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;
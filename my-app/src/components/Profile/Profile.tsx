import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from "../../redux/state";

type ProfileProps = {
    state: PostsType
}

const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    )
}

export default Profile;
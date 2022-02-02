import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {setUserProfile} from "../../../redux/profileReducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: rootReducerType) => {
    return {
        profile: state.profilePage.profile
    }

}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
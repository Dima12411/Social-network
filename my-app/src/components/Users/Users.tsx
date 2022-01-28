import React from "react";
import s from './Users.module.css'
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

/*const Users = (props: UsersContainerPropsType) => {

    return (
        <div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollowUser(u.id) }>Unfollow</button>
                                    : <button onClick={() => props.followUser(u.id) }>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                                <div></div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
}*/
class Users extends React.Component<UsersContainerPropsType> {

    constructor(props: UsersContainerPropsType) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             })
    //     }
    // }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return <div key={u.id}>
                        <span>
                            <div>
                                <img src={ u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollowUser(u.id) }>Unfollow</button>
                                    : <button onClick={() => this.props.followUser(u.id) }>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.fullname}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                                <div></div>
                            </span>
                        </span>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Users;
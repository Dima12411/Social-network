export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullname: string
    status: string
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    users : Array<UsersType>
}

let initialState: InitialStateType = {
    users: []
}


const usersReducer = (state = initialState, action: AllActionsType) : InitialStateType => {
    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload ? {...m, followed: true} : m)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload ? {...m, followed: false} : m)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        default: return state
    }
}

export type AllActionsType = FollowType | UnfollowType | SetUsersType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: userId
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        payload: users
    } as const
}
export default usersReducer;
export type PostType = {
    id: number
    message: string
    amount: number
}
export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", amount: 15},
        {id: 2, message: "It's my first posts", amount: 20},
        {id: 3, message: "Hello!", amount: 20},
        {id: 4, message: "What's yours name?", amount: 20},
    ] as Array<PostType>,
    newPostText: "",
}


const profileReducer = (state:InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [{id: 5, message: state.newPostText, amount: 0,}, ...state.posts]
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
            //     state.newPostText = action.newText
            // return state
        }
        default:
            return state
    }
}


export type ActionsProfileType = AddPostType | UpdateNewPostTextType
type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>


export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}

export default profileReducer;
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    amount: number
}
export type ProfilePagePropsType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPropsType

}
export type StorType = {
    _state: RootStateType
    subscribe: (callback: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const store: StorType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", amount: 15},
                {id: 2, message: "It's my first posts", amount: 20},
                {id: 3, message: "Hello!", amount: 20},
                {id: 4, message: "What's yours name?", amount: 20}
            ],
            newPostText: "Write your message",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Lera"},
                {id: 4, name: "Maksim"},
                {id: 5, name: "Lesha"},
                {id: 6, name: "Anton"}
            ],
            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Okay"},
                {id: 4, message: "Okay"},
                {id: 5, message: "Okay"},
                {id: 6, message: "Okay"},
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log("State changed")
    },
    subscribe(callback: (state: RootStateType) => void) {
        this._callSubscriber = callback;
    },
    dispatch(action: ActionsTypes) {
        debugger;
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                amount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

console.log(store._state.profilePage.newPostText)




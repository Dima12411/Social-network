import rerenderEntireTree from "../render";

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


let state: RootStateType  = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", amount: 15},
            {id: 2, message: "It's my first posts", amount: 20},
            {id: 3, message: "Hello!", amount: 20},
            {id: 4, message: "What's yours name?", amount: 20}
        ],
        newPostText: "",
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
}
export let addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        amount: 0
    };
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = ""
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;
import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer

})

export type rootReducerType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)


export default store;
import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {


    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Lera"},
        {id: 4, name: "Maksim"},
        {id: 5, name: "Lesha"},
        {id: 6, name: "Anton"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messages = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Okay"},
        {id: 4, message: "Okay"},
        {id: 5, message: "Okay"}
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
};

export default Dialogs;
import React, {RefObject} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "../../redux/state";

type DialogsProps = {
    state: DialogsPropsType
}

const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    let newMessageElements: RefObject<HTMLTextAreaElement> = React.createRef();
    let addMessage = () => {
        let text = newMessageElements.current?.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <div>
                    <textarea ref={newMessageElements}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
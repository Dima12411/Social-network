import s from "../Dialogs.module.css";
import React from "react";

type messageProps = {
    message: string
}

const Message = (props: messageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;
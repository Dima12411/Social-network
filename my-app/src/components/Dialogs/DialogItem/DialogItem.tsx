import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
import React from 'react'
import m from './Message.module.css'

type MassageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MassageType) {
    return (
        <div className={m.message}>

            <div><img className={m.avatar} src={props.avatar} alt={'avatar'}/></div>

            <div className={m.bubble}>
                <div className={m.name}> {props.name}</div>
                <div className={m.text}>{props.message}</div>
                <div className={m.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message

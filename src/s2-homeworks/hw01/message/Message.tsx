import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import image from './Rectangle_3.svg'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.position}>
            <div id={'hw1-message-' + props.message.id} className={s.message}>
                <div className={s.imageAndText}>

                    <div className={s.text}>
                        {/*<img className={s.imageText} src={image} alt="No"/>*/}
                        <div id={'hw1-name-' + props.message.id} className={s.name}>
                            {/*создаёт студент*/}

                            {props.message.user.name}
                            {/**/}
                        </div>
                        <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                            {props.message.message.text}
                            {/**/}
                    </pre>
                    </div>
                </div>
                <div className={s.clock}>
                    <img className={s.avatar} src={props.message.user.avatar}
                         id={'hw1-avatar-' + props.message.id}
                    />
                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        {/*создаёт студент*/}
                        {props.message.message.time}
                        {/**/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message

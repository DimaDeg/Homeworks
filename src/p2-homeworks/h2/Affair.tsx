import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.someClass}>
            <button children={'x'} className={s.closeButton} onClick={deleteCallback}/>
{/*            <button className={s.closeButton} onClick={deleteCallback}>X</button>*/}
            <div className={s.item}>
                {props.affair.name}
            </div>
            <div className={s.item}>
                {props.affair.priority}
            </div>

        </div>
    )
}

export default Affair

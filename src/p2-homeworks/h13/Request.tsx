import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";
import s from '../h7/HW7.module.css'

export const Request = () => {

    const [isChecked, setIsChecked] = useState<boolean>(true)
    const [info, setInfo] = useState<ResponseType>()

    const postRequest = () => {
        RequestAPI.postRequest({success: isChecked})
            .then(res => setInfo(res)
            )
            .catch(err => setInfo(err)
            )
    }

    return (<div className={`${s.elements} ${s.back}`}>
            <div>info: {info}</div>
            <SuperButton onClick={postRequest}>Send Request</SuperButton>
            <SuperCheckbox checked={isChecked} onChangeChecked={setIsChecked}/>
        </div>
    )
}
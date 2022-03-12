import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: any // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, addUserEnter, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.item // need to fix with (?:)

    return (
        <div className={s.someClass}>
{/*            <input
                value={name}
                onKeyPress={addUserEnter}
                onChange={setNameCallback}
                className={inputClass}/>*/}
            <SuperInputText value={name} onKeyPress={addUserEnter} onChange={setNameCallback} className={inputClass} error={error}/>
            <SuperButton value={name} onClick={addUser} children={'add'}/>
{/*            <button className={s.button} value={name} onClick={addUser}>add</button>*/}
            <span className={s.users}>{totalUsers}</span>
{/*            <div className={s.f}>{error}</div>*/}
        </div>
    )
}

export default Greeting

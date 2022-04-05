import React from 'react'
import Clock from './Clock'
import s from '../h7/HW7.module.css'

function HW9() {
    return (
        <div className={s.back}>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9

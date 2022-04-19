import React from 'react'
import SuperRange from '../c7-SuperRange/SuperRange';

import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    setValue1: (n: number) => void
    setValue2: (n: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, setValue1, setValue2
        // min, max, step, disable, ...
    }
) => {

    const setMinValue = (n: number) => {
        if (value![1] > n && n >= min)
            setValue1(n)
    }
    const setMaxValue = (n: number) => {
        if (value![0] < n && n <= max)
            setValue2(n)
    }

    let st = {
        position: 'absolute',
        width: '100%'
    }

    return (
        <div className={s.double}>
            <SuperRange value={value![0]}
                        onChangeRange={setMinValue}
                //@ts-ignore
                        st={st}
            />

            <SuperRange value={value![1]}
                        onChangeRange={setMaxValue}
            />
        </div>
    )
}

export default SuperDoubleRange

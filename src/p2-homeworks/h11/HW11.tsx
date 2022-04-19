import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from '../h7/HW7.module.css';


function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeSuperRangeValue = (num: number) => {
        if (num < value2)
            setValue1(num)
    }

    const onChangeDoubleInputRangeHandler = (nums: Array<number>) => {
        setValue1(nums[0])
        setValue2(nums[1])
    }

    return (

        <div className={s.back}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    min={0}
                    max={100}
                    onChangeRange={changeSuperRangeValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    min={0}
                    max={100}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    onChangeRange={onChangeDoubleInputRangeHandler}
                />
                <span>{value2}</span>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

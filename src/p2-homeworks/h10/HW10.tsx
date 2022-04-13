import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from '../h7/HW7.module.css'
import st from './HW10.module.css'


function HW10() {
    const dispatch = useDispatch()
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div className={s.back}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={st.container}>
                        <div className={st.loader}>
                            <img
                                src={'https://орфографика.рф/800/600/https/recxon.pro/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif'}/>

                        </div>
                    </div>
                    /*                    <div>крутилка...</div>*/
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

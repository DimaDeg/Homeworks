import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Pages from "./Routes";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5

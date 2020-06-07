import React, { memo } from 'react'
import imgUrl from '../../images/reference.png'
import './index.styl'


export default function Footer() {
    return <div className='footer'>
        <span
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002005120">
            <img src={imgUrl}/>
            <p>沪公网安备 31011002005120号</p>
        </span>
    </div>
}




import React from 'react';
import { NavLink } from "react-router-dom";
import './index.css'
import '../../style/iconfont.css'

export default function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink
                    to={'/home'}
                    activeClassName='nav-active'
                >
                    <i className="iconfont icon-zhuye"></i>
                    <div className='nav-name-tips'>主页</div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/articles'}
                    activeClassName='nav-active'
                >
                    <i className="iconfont icon-liebiao"></i>
                    <div className='nav-name-tips'>文章列表</div>
                </NavLink>
            </li>
        </ul>
    )
}

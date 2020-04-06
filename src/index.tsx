import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, // 重命名BrowserRouter为Router
    Route,
    Link
} from "react-router-dom"
import App from './pages/App/index'


const Root = document.getElementById('root') // 即首页

const Home = () => <div className="home">test</div> // 函数式命名的组件，右边相当于return的样式

const List = () => <div className="list">list</div>

ReactDOM.render(
    <Router>
        <header>
            <nav>
                <ul>
                    {/*这里表示跳转到 localhost：9000/*/}
                    <li><Link to="/">Home</Link></li>
                    {/*这里表示跳转到 localhost：9000/list*/}
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/app">App</Link></li>
                </ul>
            </nav>
        </header>

        {/*这里表示当调到路径'/'时，对应的组件是Home*/}
        {/*这里的三行Route也是dom布局的部分，而不是声明规则。只不过是当path匹配上时才会显示。所以页面中header始终存在*/}
        <Route path='/' component={Home} />
        <Route path='/list' componen t={List} />
        <Route path='/app' component={App} />
        {/*这种设置路由的方法会把3行命令逐行执行，当执行第一行时，无论是/list还是/app都包括/，所以第一行永远成立，永远有Home*/}

    </Router>,
    Root
)

/* 这里的render函数不同于正常的组件页面的render渲染函数。
render（参数1,参数2），其中参数1表示样式，参数2表示渲染到哪个节点，一般是跟节点
 */

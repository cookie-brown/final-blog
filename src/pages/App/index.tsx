import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom"
import './index.css';
import Nav from '../../components/Nav/index';
import loadable from "@loadable/component";
import Loading from 'components/Loading'
import Footer from 'components/Footer'

const LoadableComponentHome = loadable(
    () => import('../Home'),
    {
        fallback: <Loading/>
    })

const LoadableComponentArticles = loadable(
    () => import('../Articles'),
    {
        fallback: <Loading/>
    })

const LoadableComponentArticle = loadable(
    () => import('../ArticleContent'),
    {
        fallback: <Loading/>
    })

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <Switch>
                    {/*默认将入口从'/'重定向到'/home'*/}
                    <Route path='/' exact render={()=> (
                        <Redirect to='/home'/>
                    )}/>
                    <Route path={'/article/:id'} component={LoadableComponentArticle} />
                    <Route path={'/articles'} component={LoadableComponentArticles} />
                    <Route path={'/home'} component={LoadableComponentHome} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App

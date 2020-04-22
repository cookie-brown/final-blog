import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import './index.css';
// @ts-ignore
import imgURL from '../../images/logo.jpg';

export  default  class Home extends PureComponent {
    constructor(props) {
        super(props);
        // @ts-ignore
        this.state={
            homeSearch:'Search',
            articles: [],
            isAllContentShow:true,
            profile:{},
            tags:[],
        }
    }

    componentDidMount() {
        this.setState({
            articles: [
                {
                    title:'这是一个很长的标题大概要排到两行我希望他能够自动换行展示，这是一个很长的标题大概要排到两行我希望他能够自动换行展示',
                    imgUrl:'../../images/logo.jpg',
                    content:'孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员。孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生',
                    date:'2020-04-20',
                    tag:'娱乐',
                    length:'699',
                },
                {
                    title:'孟美岐',
                    imgUrl:'../../images/logo.jpg',
                    content:'孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员。孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生',
                    date:'2020-04-20',
                    tag:'娱乐',
                    length:'699',
                },
                {
                    title:'孟美岐',
                    imgUrl:'../../images/logo.jpg',
                    content:'孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员。孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生于河南省洛阳市，中国内地流行乐女歌手、演员，孟美岐，1998年10月15日出生',
                    date:'2020-04-20',
                    tag:'娱乐',
                    length:'699',
                },
            ],
            profile:{
                articlesNum:23,
                tagsNum:4,
            },
            tags:[
                {
                    name:'css',
                    value:10,
                },
                {
                    name:'js',
                    value:5,
                },
                {
                    name:'react',
                    value:'5',
                },
                {
                    name:'浏览器',
                    value:'3',
                }
            ],
        })
    }

    clearSearchContent = () => {
        this.setState({
            homeSearch:''
        })
    }

    changeSearchContent = (e) => {
        this.setState({
            homeSearch: e.target.value,
        })
    }

    _formatContent = (content) => {
        if (content.length > 200){
            content = `${content.substring(0,200)}...       `;
            this.setState({
                isAllContentShow:false,
            })
        }
        return content;
    }

    render(){
        const { homeSearch, articles, isAllContentShow, profile, tags} = this.state;

        return(
            <div className='home'>
                <div className='home-main'>
                    <header>
                        <span style={{'color':'rgb(46,45,53)',}}>Home </span><span style={{'color':'rgb(133,133,141)',}}>Page</span>
                        <div className='home-search'>
                            <input className='search' value={homeSearch} onClick={this.clearSearchContent} onChange={this.changeSearchContent}/>
                            <i className="iconfont icon-sousuo"></i>
                        </div>
                    </header>
                    <div className='home-content-list'>
                        {
                            articles.map(item =>
                                <div className='home-content-card'>
                                    <h3>{item.title}</h3>
                                    <img src={imgURL}/>
                                    <span className='article-content'>{this._formatContent(item.content)}<Link className={isAllContentShow? 'hide-element': 'link-style'} to = "/article/1">阅读更多</Link></span>
                                    <div className='card-footer'>
                                        <span>{item.date}</span>
                                        <span>{item.tag}</span>
                                        <span>共 {item.length} 字</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='home-right-part'>
                    <div className='profile-image'>
                        <img src={imgURL}/>
                    </div>
                    <h2 className='profile-name'>cookie</h2>
                    <ul className="profile-sum">
                        <li>
                            <span className='profile-sum-name'>文章</span>
                            <span className='profile-sum-value'>{profile.articlesNum}</span>
                        </li>
                        <li>
                            <span className='profile-sum-name'>分类</span>
                            <span className='profile-sum-value'>{profile.tagsNum}</span>
                        </li>
                    </ul>
                    <a className='contactMe-link' href="mailto:1394956763@qq.com">联系我</a>
                    <div className='profile-link'>
                        <a href='https://github.com/cookie-brown'><i className="iconfont icon-github"></i></a>
                        <a href='https://juejin.im/user/5cc55fbc6fb9a031ec6d2fc8'><i className="iconfont icon-cezitubiao"></i></a>
                    </div>
                    <div className='cutoff-rule'/>
                    <div className='profile-tags-content'>
                        <span className='profile-sum-name'>分类</span>
                        <ul>
                            {tags.map(item=>
                                <li >
                                    <Link className='link-style' to = "/articles">
                                        <span className='profile-tags-name'>{item.name}</span>
                                        <span className='profile-tags-value'>
                                             <span>{item.value}</span>
                                        </span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

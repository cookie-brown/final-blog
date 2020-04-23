import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import articleCard from '../../components/ArticleCard';
import './index.css';
import '../style/pageCommon.css'
import imgURL from "@/images/logo.jpg";

export default class Articles extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isShowByAbstract:false,
            isPositiveOrder:false,
            articles:[],
        }
    }

    componentDidMount(): void {
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
        })
    }

    switchArticlesOrder = () => {
        this.setState({
            isPositiveOrder: !this.state.isPositiveOrder,
        })
    }

    switchArticlesShowWay = () => {
        this.setState({
            isShowByAbstract: !this.state.isShowByAbstract,
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
        const { isShowByAbstract, isPositiveOrder, articles} = this.state;

        return(
            <div className='common-page'>
                <div className='common-page-main'>
                    <header className='common-page-main-header'>
                        <span className='common-page-main-header-title1'>All </span><span className='common-page-main-header-title2'>Articles</span>
                        <div onClick={this.switchArticlesOrder} className='articles-header-switch-button'>按时间{isPositiveOrder?'倒序':'正序'}</div>
                        <div className='vertical-split-line'></div>
                        <div onClick={this.switchArticlesShowWay} className='articles-header-switch-button'>切换到{isShowByAbstract?'列表':'摘要'}</div>
                    </header>
                    <ul className='articles-list'>
                        {isShowByAbstract?
                            articles.map(item =>
                                <articleCard
                                    title={item.title}
                                    imgUrl={item.imgUrl}
                                    content={item.content}
                                    date={item.date}
                                    tag={item.tag}
                                    sumlength={item.length}
                                    visibleLength='300'
                                />)
                            :articles.map((item,index) =>
                            <li className={(index%2==0)?'articles-list-bg':''}>
                                <Link to = "/article/1">
                                    <span className='articles-list-title'>{item.title}</span>
                                    <span className='articles-list-tag'>{item.tag}</span>
                                    <span className='articles-list-date'>{item.date}</span>
                                </Link>
                            </li>
                        )}
                    </ul>

                </div>
                <div className='common-page-right-part'></div>
            </div>
        )
    }
}


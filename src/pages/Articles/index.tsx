import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import ArticleCard from '../../components/ArticleCard';
import Pagination from "../../components/Pagination";
import './index.css';
import '../../style/pageCommon.styl'

export default class Articles extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isShowByAbstract:false,
            isPositiveOrder:false,
            articlesList:[],
            articlesCard:[],
            pageInfoList:{
                pageSize:1,
                pageIndex:0,
            },
            pageInfoCard:{
                pageSize:1,
                pageIndex:1,
            },
            tags:[],
            selectedTag:'',
            selectedYear:'2020',
            selectedMonth:'',
        }
    }

    componentDidMount(): void {
        this.setState({
            articlesList: [
                {
                    title:'Blog搭建开始',
                    imgUrl:'../../images/logo.jpg',
                    content: '首次搭建博客，还在学习中，主要使用react+ts+webpack4进行构建',
                    date:'2020-05-29',
                    tag:'js',
                    length:'39',
                },
            ],
            pageInfoList:{
                pageSize:1,
                pageIndex:0,
            },
            tags:[
                {
                    name:'css',
                    value:0,
                },
                {
                    name:'js',
                    value:1,
                },
                {
                    name:'react',
                    value:'0',
                },
                {
                    name:'浏览器',
                    value:'0',
                }
            ],
        })
    }

    switchArticlesOrder = () => {
        this.setState({
            isPositiveOrder: !this.state.isPositiveOrder,
        })
    }

    switchArticlesShowWay = () => {
        let articlesShowWay = ! this.state.isShowByAbstract;  /* 去除setstate异步影响 */
        /* 每次切换时都要向后台请求数据 */
        this.setState({
            isShowByAbstract: articlesShowWay,
            articlesCard: [
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
            pageInfoCard:{
                pageSize:8,
                pageIndex:0,
            },
        })
    }

    handleClickPageIndex = (currentId) => {

        this.setState(prevState => {
            const key = prevState.isShowByAbstract ? 'pageInfoCard' : 'pageInfoList';

            return {
                [key]: { ...prevState[key], pageIndex:currentId }
            }
        })

        // if(this.state.isShowByAbstract){
            // this.setState(prevState=> ({
            //     pageInfoCard:{...prevState.pageInfoCard, pageIndex:currentId}
            // })
        // }
    }

    handleMovePage = (iconDirection) => {
        this.setState( prevState => {
            const key = prevState.isShowByAbstract ? 'pageInfoCard' : 'pageInfoList';
            const currentPageIndex = prevState[key] ? prevState[key].pageIndex : 0;
            const pageSize = prevState[key]? prevState[key].pageSize : 0;

            // console.log({key, currentPageIndex, pageSize})

            if (iconDirection=='forward'){
                if (currentPageIndex < pageSize-1) {
                    return {
                        [key] : { ...prevState[key], pageIndex: currentPageIndex+1 }
                    }
                }
            }

            if (iconDirection=='backward'){
                if (currentPageIndex > 0) {
                    return {
                        [key] : { ...prevState[key], pageIndex: currentPageIndex-1 }
                    }
                }
            }
        })
    }

    handleSelectedTags = (index) => {
        this.setState({
            selectedTag: index,
        })
    }

    handleChangeSelectedYear = (e) => {
        const currentYear = this.state.selectedYear;
        if (e.target.id == 'backwardYear'){
            this.setState({
                selectedYear: currentYear-1
            })
        }
        if (e.target.id == 'forwardYear'){
            this.setState({
                selectedYear: currentYear+1
            })
        }
    }

    handleChangeSelectedMonth = (itemMonth) => {
        this.setState({
            selectedMonth:itemMonth,
        })
    }

    render(){
        const { isShowByAbstract, isPositiveOrder, articlesList, articlesCard, pageInfoList,
            pageInfoCard, tags, selectedTag, selectedYear, selectedMonth} = this.state;

        const articlesMonth = [
            ['1月','2月','3月','4月'],
            ['5月','6月','7月','8月'],
            ['9月','10月','11月','12月']
        ];

        return(
            <div className='common-page'>
                <div className='common-page__main'>
                    <header className='common-page__main-header'>
                        <span className='common-page__main-header-title1'>All </span><span className='common-page__main-header-title2'>Articles</span>
                        <div onClick={this.switchArticlesOrder} className='articles-header-switch-button'>按时间{isPositiveOrder?'倒序':'正序'}</div>
                        <div className='vertical-split-line'></div>
                        <div onClick={this.switchArticlesShowWay} className='articles-header-switch-button'>切换到{isShowByAbstract?'列表':'摘要'}</div>
                    </header>
                    <ul className='articles-list'>
                        {isShowByAbstract?
                            articlesCard.map(item =>
                                <ArticleCard
                                    title={item.title}
                                    imgUrl={item.imgUrl}
                                    content={item.content}
                                    date={item.date}
                                    tag={item.tag}
                                    sumLength={item.length}
                                    visibleLength='100'
                                />
                               )
                            :articlesList.map((item,index) =>
                            <li className={(index%2==0)?'articles-list-bg':''}>
                                <Link to = "/article/1">
                                    <span className='articles-list-title'>{item.title}</span>
                                    <span className='articles-list-tag'>{item.tag}</span>
                                    <span className='articles-list-date'>{item.date}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <Pagination
                        pageSize={isShowByAbstract?pageInfoCard.pageSize:pageInfoList.pageSize}
                        pageIndex={isShowByAbstract?pageInfoCard.pageIndex:pageInfoList.pageIndex}
                        onClickPageIndex={this.handleClickPageIndex}
                        onMovePage = {this.handleMovePage}
                    />
                </div>
                <div className='common-page__side'>
                    <div className='articles-tags-selector'>
                        <span className='articles-selector-title'>分类</span>
                        {tags.map((item,index) =>
                            <div
                                className={ index==selectedTag ? 'articles-tags-selector-item selected-tag' : 'articles-tags-selector-item' }
                                onClick={this.handleSelectedTags.bind(this, index)}
                            >
                                <Link className='link-style' to = "/articles">
                                    <span className='articles-tags-selector-name'>{item.name}</span>
                                    <span className='articles-tags-selector-value'>{item.value}</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className='articles-timeline-selector'>
                        <span className='articles-selector-title'>归档</span>
                        <div className='articles-timeline-selector-year'>
                            <i
                                id='backwardYear'
                                className="iconfont icon-triangle-left"
                                onClick={this.handleChangeSelectedYear}
                            />
                             {selectedYear}年
                            <i
                                id='forwardYear'
                                className="iconfont icon-triangle-right"
                                onClick={this.handleChangeSelectedYear}
                            />
                        </div>
                        <table className='articles-timeline-selector-month'>
                            {articlesMonth.map(item =>
                                <tr>
                                    {item.map(item =>
                                        <td
                                            id={item}
                                            className={item==selectedMonth ? 'selected-month':''}
                                            onClick={this.handleChangeSelectedMonth.bind(this,item)}
                                        >{item}</td>
                                    )}
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


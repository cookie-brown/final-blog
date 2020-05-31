import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import ArticleCard from '../../components/ArticleCard';
import './index.styl';
import { queryArticleList } from 'services/homeService'
import '../../style/pageCommon.styl'

export  default  class Home extends PureComponent {
    constructor(props) {
        super(props);
        // @ts-ignore
        this.state={
            homeSearch: '',
            articles: [],
            isAllContentShow:true,
            profile:{},
            tags:[],
        }

        console.log(
            '输入为123456789.1234',
            this.thousandSplit(123456789.1234)
            )
    }

    async componentDidMount() {
        const res = await queryArticleList()
        console.log(res)

        this.setState({
            articles: [
                {
                    title:'Blog搭建开始',
                    imgUrl:'../../images/logo.jpg',
                    content: '首次搭建博客，还在学习中，主要使用react+ts+webpack4进行构建',
                    date:'2020-05-29',
                    tag:'js',
                    length:'39',
                },
            ],
            profile:{
                articlesNum:1,
                tagsNum:1,
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
            <div className='common-page'>
                <div className='common-page__main'>
                    <header className='common-page__main__header'>
                        <div className='header-title'>
                            <span className='header-title__content'>Home</span>
                            <span className='header-title__content'>Page</span>
                        </div>
                        <div className='header-search'>
                            <input
                                className='header-search__input'
                                type='text'
                                value={homeSearch}
                                placeholder='请输入文章标题、内容搜索'
                                onChange={this.changeSearchContent}
                            />
                            <i
                                className="iconfont icon-qingchushuru"
                                style={{
                                    visibility: homeSearch ? 'visible' : 'hidden',
                                    opacity: homeSearch ? 1 : 0,
                                }}
                                onClick={this.clearSearchContent}
                            />
                            <i className="iconfont icon-sousuo" />
                        </div>
                    </header>
                    <div className='home-content-list'>
                        {
                            articles.map(item =>
                                    <ArticleCard
                                        title={item.title}
                                        imgUrl={item.imgUrl}
                                        showInHome='1'
                                        content={item.content}
                                        date={item.date}
                                        tag={item.tag}
                                        sumLength={item.length}
                                        visibleLength='200'
                                    />
                            )
                        }
                    </div>
                </div>
                <div className='common-page__side'>
                    <div className='profile-image'>
                        {/*<img src={portraitImg} />*/}
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
                    <div className='horizontal-split-line'/>
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

    thousandSplit = (num) => {
        const [intNum, floatNum] = String(num).split('.')
        const intNumArr = intNum.split('').reverse()
        const floatNumArr = !!floatNum
            ? floatNum.split('')
            : []

        Array.prototype.thousandReduce = function(type) {
            return this.reduce((result, iNum, idx) => {
                let pos = Math.floor(idx / 3)
                let calcNum = result[pos] || ''
                calcNum = type === 'int'
                    ? `${iNum}` + calcNum
                    :  calcNum + `${iNum}`

                result[pos] = calcNum
                return result
            }, [])
        }


        // 处理整数部分
        let inrRes = intNumArr.thousandReduce('int')
        // 处理小数部分
        let floatRes = floatNumArr.thousandReduce('float')

        return `${inrRes.reverse().join(',')}.${floatRes.join(',')}`
    }
}

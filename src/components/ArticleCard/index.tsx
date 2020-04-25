import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import './index.css';
import '../../pages/style/pageCommon.css'
import imgURL from "@/images/logo.jpg";

export default class ArticleCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isAllContentShow: true,
        }
    }

    _formatContent(content:any, visibleLength:any){
        if (content.length > visibleLength) {
            content = `${content.substring(0, visibleLength)}...  `;
            this.setState({
                isAllContentShow: false,
            })
        }
        return content;
    }

    render() {
        const { title, imgUrl, showInHome, content, date, tag, sumLength, visibleLength} = this.props;
        const { isAllContentShow } = this.state;

        return (
            <div className='article-card'>
                <h3>{title}</h3>
                <img className={showInHome?'article-card-img-home':'article-card-img-articles'} src={imgURL}/>
                <span className='article-card-content'>
                    {this._formatContent(content,visibleLength)}
                    <Link className={isAllContentShow ? 'hide-show-link':'link-style'} to = '/article/1'>阅读更多</Link>
                </span>
                <div className='article-card-footer'>
                    <span>{date}</span>
                    <span>{tag}</span>
                    <span>共{sumLength}字</span>
                </div>
            </div>
        )
    }
}



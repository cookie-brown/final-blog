import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import './index.css';
import '../../style/pageCommon.styl';

export default class Pagination extends PureComponent{
    constructor(props) {
        super(props);
    }

    createArray(arrLength){
        let newArr=[];
        for(var i=0;i<arrLength;i++){
            newArr[i]=i+1;
        }
        return newArr;
    }

    handleClick = (e) => {
        this.props.onClickPageIndex( +e.target.id ); /* 否则是字符串，隐式转换成数字 */
    }

    handleClickIcon = (e) => {
        this.props.onMovePage(e.target.id);
    }

    render(){
        const { pageSize, pageIndex } = this.props;

        return(
            <ul className='pagination'>
                <li>
                    <i
                        id='backward'
                        className="iconfont icon-jiantouzuo"
                        onClick={this.handleClickIcon}
                    /></li>
                {this.createArray(pageSize).map((item,index )=>
                    <li
                        id={index}
                        data-iid={index}
                        className={index==pageIndex?'currentPage':''}
                        onClick={this.handleClick}
                    >{item}</li>
                )}
                <li>
                    <i
                        id='forward'
                        className="iconfont icon-jiantouyou"
                        onClick={this.handleClickIcon}
                    /></li>
            </ul>
        )
    }

}

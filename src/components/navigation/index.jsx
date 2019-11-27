import React from 'react';
import './index.css'
import logo from './../../images/logo.png'
export default class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="inner">
                    <div className="logo">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="title">剑道的传承</div>
                    <div className="tab">
                        <div>关于我们</div>
                        <div>器材</div>
                        <div>培训</div>
                        <div>文化</div>
                        <div>赛事</div>
                        <div>资讯</div>
                        <div>首页</div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import {Link} from 'react-router-dom'
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
                    <Link to="/about"><div style={{borderBottom:this.props.tab === 'about' ? '.04rem solid #FF5D38' : ''}}>关于我们</div></Link>
                    <Link to="/equipment"><div style={{borderBottom:this.props.tab === 'equipment' ? '.04rem solid #FF5D38' : ''}}>器材</div></Link>
                    <Link to="/train"><div style={{borderBottom:this.props.tab === 'train' ? '.04rem solid #FF5D38' : ''}}>培训</div></Link>
                    <Link to="/culture"><div style={{borderBottom:this.props.tab === 'culture' ? '.04rem solid #FF5D38' : ''}}>文化</div></Link>
                    <Link to="/match"><div style={{borderBottom:this.props.tab === 'match' ? '.04rem solid #FF5D38' : ''}}>赛事</div></Link>
                    <Link to="/info"><div style={{borderBottom:this.props.tab === 'info' ? '.04rem solid #FF5D38' : ''}}>资讯</div></Link>
                    <Link to="/index"><div style={{borderBottom:this.props.tab === 'index' ? '.04rem solid #FF5D38' : ''}}>首页</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}
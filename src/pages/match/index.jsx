import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../../components/navigation'
import arrowLeft from './../../images/arrow-bgblack-left.png'
import arrowRight from './../../images/arrow-right.png'
import arrow from './../../images/arrow_more_left.png'
import bg1 from './../../images/1.png'
import bg2 from './../../images/2.png'
import playOS from './../../images/play_circle_orange_s.png'
import './index.css'
export default class match extends Component {
    state = {
        starList:[],
        starPage:1,
        tabIndex:1,
        year:'2019'
    }
    componentWillMount(){
        var star = [bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1]
        this.setState({starList:star});
    }
    starPageAdd=()=>{
        if(this.state.starPage === 3) return;
        var page = this.state.starPage;
        this.setState({starPage:++page})
    }
    starPageRemove=()=>{
        if(this.state.starPage === 1) return;
        var page = this.state.starPage;
        this.setState({starPage:--page})
    }
    changeTabIndex=(index)=>{
        this.setState({tabIndex:index})
    }
    changeYear=(year)=>{
        this.setState({year:year})
    }
    render(){
        return (
            <main>
                <Navigation tab="match"></Navigation>
                <div className="event_plan">
                    <div className="plan">
                        <p>赛事计划</p>
                        <p className={this.state.year === '2019' ? 'active' : ''} onClick={this.changeYear.bind(this,'2019')}>2019</p>
                        <p className={this.state.year === '2020' ? 'active' : ''} onClick={this.changeYear.bind(this,'2020')}>2020</p>
                    </div>
                    <ul className="month">
                        <li><div className="spot"></div><span>01月</span></li>
                        <li><div className="spot"></div><span>02月</span></li>
                        <li><div className="spot"></div><span>03月</span></li>
                        <li><div className="spot"></div><span>04月</span></li>
                        <li><div className="spot"></div><span>05月</span></li>
                        <li><div className="spot"></div><span>06月</span></li>
                        <li><div className="spot"></div><span>07月</span></li>
                        <li><div className="spot"></div><span>08月</span></li>
                        <li><div className="spot"></div><span>09月</span></li>
                        <li><div className="spot"></div><span>10月</span></li>
                        <li><div className="spot"></div><span>11月</span></li>
                        <li><div className="spot"></div><span>12月</span></li>
                    </ul>
                    <div className="event">
                        <ul>
                            <li>
                                <p>全国击剑冠军赛（第一站）</p>
                                <p>12.1-12.7</p>
                                <p>扬州站</p>
                            </li>
                            <li>
                                <p>全国击剑冠军赛（第一站）</p>
                                <p>12.1-12.7</p>
                                <p>扬州站</p>
                            </li>
                            <li>
                                <p>全国击剑冠军赛（第一站）</p>
                                <p>12.1-12.7</p>
                                <p>扬州站</p>
                            </li>
                            <li>
                                <p>全国击剑冠军赛（第一站）</p>
                                <p>12.1-12.7</p>
                                <p>扬州站</p>
                            </li>
                            <li>
                                <p>全国击剑冠军赛（第一站）</p>
                                <p>12.1-12.7</p>
                                <p>扬州站</p>
                            </li>
                        </ul>
                        <img src={arrowRight} alt=""></img>
                        <img src={arrowLeft} alt=""></img>
                    </div>
                </div>
                <div className="star">
                    <div className="layout">
                        <div>
                            <span>击剑明星</span>
                            <div>
                                {this.state.starPage < 3 &&
                                    <img src={arrow} alt="" onClick={this.starPageAdd.bind(this)} className="add"></img>   
                                } 
                            </div>
                            <span>{this.state.starPage}/<b style={{fontWeight:400,color:this.state.starPage < 3 ? '#999999' : '#333333'}}>3</b></span>
                            <div>
                                {this.state.starPage > 1 &&
                                    <img src={arrow} alt="" onClick={this.starPageRemove.bind(this)} className="remove"></img> 
                                } 
                            </div>  
                        </div>
                    </div>   
                    <ul className="list" style={{marginLeft:-(this.state.starPage-1)*12.32+'rem'}}>
                        {this.state.starList.map((star,index) =>
                            <li key={index}><Link to={'/match/'+index}>
                                <img src={star} alt=""/>
                                <p>间距</p>
                                </Link></li>
                        )}
                    </ul>
                </div>          
                <div className="event_review">
                    <p>赛事回顾</p>
                    <div className="tab">
                        <span className={this.state.tabIndex ===1 ? "active" : ''} onClick={this.changeTabIndex.bind(this,1)}>冠军赛</span>
                        <span className={this.state.tabIndex ===2 ? "active" : ''} onClick={this.changeTabIndex.bind(this,2)}>英雄传说</span>
                        <span className={this.state.tabIndex ===3 ? "active" : ''} onClick={this.changeTabIndex.bind(this,3)}>击剑情报局</span>
                    </div>
                    {
                        this.state.tabIndex === 1 &&
                        <ul className="list">
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                        </ul>
                    }
                    {
                        this.state.tabIndex === 2 &&
                        <ul className="list">
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                        </ul>
                    }
                    {
                        this.state.tabIndex === 3 &&
                        <ul className="list">
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                        </ul>
                    }
                </div>
            </main>
        )
    }
};
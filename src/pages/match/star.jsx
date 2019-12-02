import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../../components/navigation'
import bg1 from './../../images/1.png'
import arrowLeft from './../../images/arrow-bgblack-left.png'
import arrowRight from './../../images/arrow-right.png'
import playOS from './../../images/play_circle_orange_s.png'
import './star.css'
export default class star extends Component {
    render(){
        return (
            <main>
                <Navigation tab="match"></Navigation>
                <div className="detail_title">赛事 / 击剑明星</div>
                <div className="star_detail">
                    <div className="star_info">
                        <div className="avatar">
                            <img src={bg1} alt=""></img>
                        </div>
                        <div className="info">
                            <p>仲满</p>
                            <p>中国男子佩剑队运动员</p>
                            <p>生日：1983年2月28日     出生于江苏省南通市海安县北凌乡仲洋村</p>
                            <p>仲满15岁之前是田径队员，15岁时由于身高过高被借调到篮球队参加比赛，在南通市比赛时，被击剑教练黄保华看中。1997年夏天，仲满正式学习击剑，教练黄保华。2005年，进入国家队。2008年，仲满在北京奥运会男子佩剑个人赛获得金牌 [2]  。2013年，第十二届全国运动会击剑项目男子佩剑团体比赛，由仲满率领的江苏队以45比39战胜辽宁夺冠。
2013年，第十二届全运会后，仲满退役 [4]  ，之后复出。
2017年第十三届全运会击剑男子佩剑冠军 [5]  。同年9月1日全运会后，仲满正式宣布退役 [1]  。</p>
                        </div>
                    </div>
                    <div className="recent_games">
                        <p>他的近期比赛</p>
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
                    <div className="recent_games heroic_moment">
                        <p>他的英雄时刻</p>
                        <ul className="list">
                            <li>
                                <img src={bg1} alt=""></img><p>中国击剑俱乐部联赛</p>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>播放量：200</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
};
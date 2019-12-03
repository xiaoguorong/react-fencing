import React from 'react';
import Layout from '../../components/index-layout'
import Navigation from '../../components/navigation'
import {Link} from 'react-router-dom'
import './index.css'
import banner01 from './../../pic/banner01.png'
import banner02 from './../../pic/banner02.png'
import banner03 from './../../pic/banner03.png'
import banner04 from './../../pic/banner04.png'
import lehuilin from './../../pic/lehuilin.jpg'
import linsheng from './../../pic/linsheng.jpg'
import sunyiwen from './../../pic/sunyiwen.jpg'
import xuanqi from './../../pic/xuanqi.jpg'
import zhuyeming from './../../pic/zhuyeming.jpg'
import xuyingming from './../../pic/xuyingming.jpg'
import sunwei from './../../pic/sunwei.jpg'
import shijialuo from './../../pic/shijialuo.jpg'

import playOS from './../../images/play_circle_orange_s.png'
import playWS from './../../images/play_circle_white_s.png'
import arrowBL from './../../images/arrow_bgblack_left.png'
import arrowBR from './../../images/arrow_bgblack_right.png'
import arrowL from './../../images/arrow_left.png'
import arrowR from './../../images/arrow_right.png'
import hot from './../../images/hot.png'
import arrow from './../../images/arrow_more_left.png'
import arrowRB from './../../images/arrow_right_blackbg.png'
import arrowLB from './../../images/arrow_left_blackbg.png'

export default class index extends React.Component {
    state = {
        bannerBgList:[],
        bannerTitleList:[],
        bannerClickIndex: 0,//0 4张靠左 1 4张靠右
        bannerHoverIndex: 1,
        equipmentIndex:0,
        starList:[],
        starNameList:[],
        starPage:1,
        peoplePage:1,
        videoIndex:0
    }
    componentWillMount(){
        var arr = [banner01,banner02,banner03]
        this.setState({bannerBgList:arr});
        var arr1 = ['绍兴柯桥 首届击剑冠军赛火热开赛','第二届中国击剑大师赛在昌落幕','武汉军运会击剑测试赛开赛']
        this.setState({bannerTitleList:arr1});
        var star = [lehuilin,linsheng,sunyiwen,xuanqi,zhuyeming,xuyingming,sunwei,shijialuo]
        this.setState({starList:star});
        var star1 = ['乐慧林','林声','孙一文','许安琪','朱明叶','许英明','孙伟','施嘉洛'];
        this.setState({starNameList:star1});
    }
    changeClickIndex=(index)=>{
        var arr=[];
        index === 0 ? arr = [banner01,banner02,banner03] : arr = [banner02,banner03,banner04]
        this.setState({bannerBgList:arr});
        var arr1=[];
        index === 0 ? arr1 = ['绍兴柯桥 首届击剑冠军赛火热开赛','第二届中国击剑大师赛在昌落幕','武汉军运会击剑测试赛开赛'] : arr1 = ['第二届中国击剑大师赛在昌落幕','武汉军运会击剑测试赛开赛','全国击剑冠军赛 千余名剑客上虞“论剑”']
        this.setState({bannerTitleList:arr1});
        this.setState({bannerClickIndex:index})
        this.setState({bannerHoverIndex:index+1})
    }
    toggleHover=(index)=>{
        this.setState({bannerHoverIndex:index})
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
    peoplePageAdd=()=>{
        if(this.state.peoplePage === 2) return;
        var page = this.state.peoplePage;
        this.setState({peoplePage:++page})
    }
    peoplePageRemove=()=>{
        if(this.state.peoplePage === 1) return;
        var page = this.state.peoplePage;
        this.setState({peoplePage:--page})
    }
    changeVideoIndex=(index)=>{
        this.setState({videoIndex:index})
    }
    toggleVideoDes=()=>{
        var cover = document.querySelector(".list .cover")
        cover.classList.toggle("cover_close")
    }
    toggleEquipmentHover=(index)=>{
        this.setState({equipmentIndex:index})
    }
    render(){
        return (
            <main>
                <Navigation tab="index"></Navigation>
                <div className="banner_container">
                    <div className="banner">
                        {this.state.bannerClickIndex === 1 ? (  
                            <div>
                                <div className="arrow arrowr">
                                    <img src={arrowL} alt=""></img>
                                </div>
                                <div className="arrow arrowl" onClick={this.changeClickIndex.bind(this, 0)}>
                                    <img src={arrowBR} alt=""></img>
                                </div>
                            </div>
                        ):(  
                            <div> 
                                <div className="arrow arrowr" onClick={this.changeClickIndex.bind(this, 1)}>
                                    <img src={arrowBL} alt=""></img>
                                </div>
                                <div className="arrow arrowl">
                                    <img src={arrowR} alt=""></img>
                                </div>
                            </div>
                        )}
                        <div className="pic">
                            {this.state.bannerBgList.map((bg,index) =>
                            <Link to="https://www.baidu.com">
                                <div style={{transform: (this.state.bannerHoverIndex === index ? "scale(1.14)" : '')}} 
                                    key={index} 
                                    onMouseEnter={this.toggleHover.bind(this,index)} 
                                    onMouseLeave={this.toggleHover.bind(this,index)}>
                                        
                                        <img src={bg} alt={index}></img>
                                        {this.state.bannerHoverIndex === index ? (
                                            <div className="default hover">
                                                <p>{this.state.bannerTitleList[index]}</p>
                                                <div className="play">
                                                    <img src={playWS} alt=""></img>
                                                    <span>立即播放</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="default">
                                                <p>{this.state.bannerTitleList[index]}</p>
                                                <div className="play">
                                                    <img src={playOS} alt=""></img>
                                                    <span>播放量：200</span>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </Link>
                            )}
                        </div>
                        <div className="hot">
                            <p className="title">
                                <img src={hot} alt=""></img>
                                <span>今日头条</span>
                            </p>
                            <p className="detail">好消息！重庆市首届青少年击剑锦标赛明年2月开战</p>
                            <p className="detail">搭乘5G/VR黑科技，2019-2020赛季全国击剑冠军赛第一站28日在扬开赛</p>
                            <p className="detail">2019年成都市首届中小学生比赛暨金牛区中小学生击剑锦标赛开赛</p>
                            <p className="detail">高大上！击剑进校园 株洲首个小学击剑馆16日开馆</p>
                            <p className="detail">2019年市青少年击剑锦标赛落幕：多点合力共促发展</p>
                        </div>
                    </div>
                </div>
                <div className="recent_games">
                    <Layout title="近期比赛">
                        <div className="line"></div>
                        <div className="games">
                            <div style={{color:'#333'}} className="hover">
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">05月30日</p>
                                <div className="content">
                                    <p>全国青年击剑锦标赛暨二青会预赛第二站</p>
                                    <p style={{color:'#FF5D38'}}>05.30-06.05</p>
                                    <p>长沙</p>
                                </div>
                            </div>
                            <div style={{color:'#333'}} className="hover">
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">10月28日</p>
                                <div className="content">
                                    <p>全国击剑锦标赛</p>
                                    <p style={{color:'#FF5D38'}}>10.28</p>
                                    <p>西安</p>
                                </div>
                            </div>
                            <div style={{color:'#333'}} className="hover">
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">11月20日</p>
                                <div className="content">
                                    <p>第25届中国大学生击剑锦标赛</p>
                                    <p style={{color:'#FF5D38'}}>11.20-11.26</p>
                                    <p>厦门</p>
                                </div>
                            </div>
                            <div style={{color:'#333'}} className="hover">
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">11月23日</p>
                                <div className="content">
                                    <p>陕西省青少年击剑俱乐部联赛</p>
                                    <p style={{color:'#FF5D38'}}>11.23</p>
                                    <p>陕西</p>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
                <div className="heavy_pound_and_interview">
                    <div className="heavy_pound">
                        <Layout title="重磅">
                            <ul>
                                <li>
                                    <img src={require('./../../pic/heavy_pound01.jpg')} alt=""></img>
                                    <div className="content">
                                        <p>击剑——世锦赛：中国队夺得女子重剑团体冠军</p>
                                        <p>中国女子重剑队队员、教练员、中国击剑协会主席王海滨（前排右四）等在颁奖仪式上合影。</p>
                                        <p></p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('./../../pic/heavy_pound11.jpg')} alt=""></img>
                                    <div className="content">
                                        <p>中国选手钱佳睿获得第七届世界军人运动会女子佩剑亚军</p>
                                        <p>在武汉举行的第七届世界军人运动会女子佩剑个人赛决赛中，中国选手钱佳睿以11比15不敌俄罗斯选手埃戈里安，获得亚军。</p>
                                        <p></p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('./../../pic/heavy_pound21.jpg')} alt=""></img>
                                    <div className="content">
                                        <p>2019中国击剑俱乐部联赛总决赛（渭南站）明日在渭南经开区举办</p>
                                        <p>11月27日，渭南经开区召开2019中国击剑俱乐部联赛总决赛（渭南站）协调会议。会上获悉，2019中国击剑俱乐部联赛总决赛（渭南站）将于11月29日至12月1日在渭南经开区申华汽博园举办。</p>
                                        <p></p>
                                    </div>
                                </li>
                            </ul>
                        </Layout>
                    </div>
                    <div className="interview">
                        <div className="layout">
                            <div>
                                <span>击剑明星</span>
                                <div>
                                    {this.state.peoplePage < 2 &&
                                        <img src={arrow} alt="" onClick={this.peoplePageAdd.bind(this)} className="add"></img>   
                                    } 
                                </div>
                                <span>{this.state.peoplePage}/<b style={{fontWeight:400,color:this.state.peoplePage < 2 ? '#999999' : '#333333'}}>2</b></span>
                                <div>
                                    {this.state.peoplePage > 1 &&
                                        <img src={arrow} alt="" onClick={this.peoplePageRemove.bind(this)} className="remove"></img> 
                                    } 
                                </div>  
                            </div>
                        </div>
                        {this.state.peoplePage === 1 &&
                            <div className="people">
                                <div style={{backgroundImage:"url("+require('./../../pic/sunyiwen.jpg')+")"}}>
                                    <div className="name">
                                        <b>孙一文</b> 中国击剑队女子重剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国击剑队女子重剑运动员</p>
                                        <p>2005年，孙一文进入烟台市击剑队。
                                        2006年，孙一文入选中国击剑队。
                                        2013年5月，在国际剑联女子重剑世界杯大奖赛中，孙一文等代表的中国队获得女子重剑团体冠军。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                                <div style={{backgroundImage:"url("+require('./../../pic/shijialuo.jpg')+")"}}>
                                    <div className="name">
                                        <b>施嘉洛</b> 中国击剑队男子花剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国击剑队男子花剑运动员</p>
                                        <p>2012年，施嘉洛获得全国击剑锦标赛男子花剑个人亚军、团体亚军。
                                        2013年，获得亚洲青年击剑锦标赛花剑个人赛冠军，第六届东亚运动会花剑个人赛冠军、男子花剑团体亚军。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                            </div>
                        } 
                        {this.state.peoplePage === 2 &&
                            <div className="people">
                                <div style={{backgroundImage:"url("+require('./../../pic/xuanqi.jpg')+")"}}>
                                    <div className="name">
                                        <b>许安琪</b> 中国女子击剑队运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国女子击剑队运动员</p>
                                        <p>2009年许安琪破格进入国家队，并参加世锦赛获得亚锦赛女重团体亚军。
                                        2012年8月5日，许安琪在伦敦奥运会团体决赛中以39比25战胜韩国队，为中国夺取奥运会上的击剑团体第一枚金牌。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                                <div style={{backgroundImage:"url("+require('./../../pic/lehuilin.jpg')+")"}}>
                                    <div className="name">
                                        <b>乐慧林</b> 中国击剑队女子花剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国击剑队女子花剑运动员</p>
                                        <p>2010年，乐慧林入选中国击剑队。
                                        2010年，在广州亚运会击剑比赛中，乐慧林获得女子花剑团体季军。
                                        2011年4月，在亚洲击剑锦标赛中，乐慧林获得女子花剑个人、团体季军。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                            </div>
                        } 
                    </div> 
                </div>                       
                <div className="star">
                    <div className="layout">
                        <div>
                            <span>击剑明星</span>
                            {/* <div>
                                {this.state.starPage < 3 &&
                                    <img src={arrow} alt="" onClick={this.starPageAdd.bind(this)} className="add"></img>   
                                } 
                            </div>
                            <span>{this.state.starPage}/<b style={{fontWeight:400,color:this.state.starPage < 3 ? '#999999' : '#333333'}}>3</b></span>
                            <div>
                                {this.state.starPage > 1 &&
                                    <img src={arrow} alt="" onClick={this.starPageRemove.bind(this)} className="remove"></img> 
                                } 
                            </div>   */}
                        </div>
                    </div>   
                    <ul className="list" style={{marginLeft:-(this.state.starPage-1)*12.32+'rem'}}>
                        {this.state.starList.map((star,index) =>
                            <li key={index}>
                                <img src={star} alt=""/>
                                <p>{this.state.starNameList[index]}</p>
                            </li>
                        )}
                    </ul>
                </div>                 
                <div className="video_list">
                    <div className="tab">
                        <span onClick={this.changeVideoIndex.bind(this,0)} className={this.state.videoIndex === 0 ? 'active' : ''}>冠军赛</span>
                        <span onClick={this.changeVideoIndex.bind(this,1)} className={this.state.videoIndex === 1 ? 'active' : ''}>英雄传说</span>
                    </div>
                    {this.state.videoIndex === 0 &&
                    <div className="list">
                        <div className="leftInner" style={{backgroundImage:'url('+require('./../../pic/champion01.png')+')'}}>
                            <div className="play">
                                <img src={playOS} alt=""></img>
                                <span>播放量：200</span>
                            </div>
                            <div className="arrow_r" onClick={this.toggleVideoDes}>
                                <img src={arrowRB} alt=""></img>
                            </div>
                            <div className="cover">
                                <div className="arrow" onClick={this.toggleVideoDes}>
                                    <img src={arrowLB} alt=""></img>
                                </div>
                                <p>2018-2019赛季全国击剑冠军赛（总决赛）23日比赛集锦</p>
                                <p>2018-2019赛季全国击剑总决赛（二）</p>
                                <p>2019“国庆杯”武汉市击剑冠军赛</p>
                                <p>2019世界击剑锦标赛女重团体决赛（中国VS俄罗斯）</p>
                            </div>
                        </div>
                        <ul className="rightInner">
                            <li style={{backgroundImage:'url('+require('./../../pic/champion02.png')+')'}} title="2018-2019赛季全国击剑冠军赛">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>2018-2019赛季全国击</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/champion03.png')+')'}} title="2018-2019赛季全国击剑总决赛（二）">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>2018-2019赛季全国击</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/champion04.png')+')'}} title="2019“国庆杯”武汉市击剑冠军赛">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>2019“国庆杯”武汉市</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/champion05.png')+')'}} title="2019世界击剑锦标赛女重团体决赛（中国VS俄罗斯）">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>2019世界击剑锦标赛女</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/champion06.png')+')'}} title="二青会击剑比赛 西安女子花剑勇夺团体冠军">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>二青会击剑比赛</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/champion07.png')+')'}} title="全国击剑冠军赛总决赛第三日集锦">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>全国击剑冠军赛总决赛</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
                {this.state.videoIndex === 1 &&
                    <div className="list">
                        <div className="leftInner" style={{backgroundImage:'url('+require('./../../pic/hero01.png')+')'}}>
                            <div className="play">
                                <img src={playOS} alt=""></img>
                                <span>播放量：200</span>
                            </div>
                            <div className="arrow_r" onClick={this.toggleVideoDes}>
                                <img src={arrowRB} alt=""></img>
                            </div>
                            <div className="cover">
                                <div className="arrow" onClick={this.toggleVideoDes}>
                                    <img src={arrowLB} alt=""></img>
                                </div>
                                <p>广东击剑队队员邓小浩专访</p>
                                <p>击剑运动员 雷声 演讲</p>
                                <p>击剑运动员孙伟 访谈</p>
                                <p>2019世界击剑锦标赛女重团体决赛（中国VS俄罗斯）</p>
                                <p>中国击剑访谈</p>
                            </div>
                        </div>
                        <ul className="rightInner">
                            <li style={{backgroundImage:'url('+require('./../../pic/hero02.png')+')'}} title="广东击剑队队员邓小浩专访">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>广东击剑队队员邓小浩</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/hero03.png')+')'}} title="击剑运动员 雷声 演讲">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>击剑运动员 雷声 演讲</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/hero04.png')+')'}} title="击剑运动员孙伟 访谈">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>击剑运动员孙伟 访谈</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/hero05.png')+')'}} title="中国击剑访谈">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑访谈</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+require('./../../pic/hero06.png')+')'}} title="二青会击剑比赛 西安女子花剑勇夺团体冠军">
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>二青会击剑比赛</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
                </div>
                <div className="display">
                    <Layout title="机构风采">
                        <ul>
                            <li>
                                <img src={require('./../../pic/display01.jpg')} alt="" title="江苏省体育局青少处及苏州体育局领导莅临佐罗击剑俱乐部视察工作"></img>
                                <p>江苏省体育局青少处及苏州体育局领导莅临佐罗击剑俱乐部视察工作</p>
                            </li>
                            <li>
                                <img src={require('./../../pic/display11.jpg')} alt="" title="祝贺许庭玮获得二青会男重甲组冠军!"></img>
                                <p>祝贺许庭玮获得二青会男重甲组冠军！</p>
                            </li>
                            <li>
                                <img src={require('./../../pic/display21.jpg')} alt="" title="佐罗击剑俱乐部应邀参加FM91.1苏州新闻广播直播栏目《听运动的声音》"></img>
                                <p>佐罗击剑俱乐部应邀参加FM91.1苏州新闻广播直播栏目《听运动的声音》</p>
                            </li>
                            <li>
                                <img src={require('./../../pic/display31.jpg')} alt="" title="【八月生日会来啦】佐罗击剑伴你共度美好时光"></img>
                                <p>【八月生日会来啦】佐罗击剑伴你共度美好时光</p>
                            </li>
                        </ul>
                    </Layout>
                </div>
                <div className="knowledge_and_org_video">
                    <div className="knowledge">
                        <Layout title="击剑知识">
                            <div className="inner">
                                <p>击剑冷知识</p>
                                <p>击剑起源与礼仪</p>
                                <p>击剑的规则</p>
                                <p>&nbsp;</p>
                                <p>查看更多</p>
                            </div>
                        </Layout>
                    </div>
                    <div className="org_video">
                        <Layout title="机构视频">
                            <ul className="inner">
                               <li style={{backgroundImage:'url('+require('./../../pic/org01.jpg')+')'}}>
                                    <div className="cover">
                                        <span>苏州市大众体育联赛</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：126</span>
                                        </div>
                                    </div>
                               </li>
                               <li style={{backgroundImage:'url('+require('./../../pic/org02.png')+')'}}>
                                    <div className="cover">
                                        <span>击剑公开赛</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：358</span>
                                        </div>
                                    </div>
                               </li>
                               <li style={{backgroundImage:'url('+require('./../../pic/org03.png')+')'}}>
                                    <div className="cover">
                                        <span>佐罗击剑简介</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：639</span>
                                        </div>
                                    </div>
                               </li>
                            </ul>
                        </Layout>
                    </div>
                </div>
                <div className="equipment">
                    <Layout title="击剑器材">
                        <div className="container">
                            <div className="leftInner">
                                {this.state.equipmentIndex === 0 &&
                                <div>
                                    <div className="pic">
                                        <img src={require('./../../pic/equipment01.jpg')} alt=""></img>
                                        <p>击剑面罩</p>
                                    </div>
                                    <div className="pic">
                                        <img src={require('./../../pic/equipment02.jpg')} alt=""></img>
                                        <p>剑</p>
                                    </div>
                                </div>
                                }
                                {/* {this.state.equipmentIndex === 1 &&
                                <div>
                                    <div className="pic">
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩1</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩1</p>
                                    </div>
                                </div>
                                }
                                {this.state.equipmentIndex === 2 &&
                                <div>
                                    <div className="pic">
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩2</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩2</p>
                                    </div>
                                </div>
                                } */}
                                {/* <div className="spot">
                                    <span style={{background:this.state.equipmentIndex === 0 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,0)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,0)}></span>
                                    <span style={{background:this.state.equipmentIndex === 1 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,1)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,1)}></span>
                                    <span style={{background:this.state.equipmentIndex === 2 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,2)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,2)}></span>
                                </div> */}
                            </div>
                            <div className="rightInner">
                                <div>
                                    <p>器材知识</p>
                                    <p>高贵的决斗艺术，这些运动装备不能少</p>
                                    <p>「干货来袭」从养护装备细节看你是不是真爱击剑！</p>
                                    <p>怎样穿好击剑鞋？</p>
                                    <p>剑戳在身上疼不疼？好的击剑服堪比防弹衣</p>
                                    <p>“好剑在手，天下我有”</p>
                                    <p>击剑手套臭了怎么办？</p>
                                    <p>为什么击剑不用透明的面罩？</p>
                                    <p>查看更多</p>
                                </div>
                                {/* <div>
                                    <p>器材测评</p>
                                    <p>击剑术语</p>
                                    <p>观赛礼仪</p>
                                    <p>击剑术语介绍-中英版</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>查看更多</p>
                                </div> */}
                            </div>
                        </div>
                    </Layout>
                </div>
            </main>
        )
    }
};
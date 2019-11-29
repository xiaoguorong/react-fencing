import React from 'react';
import Layout from '../../components/index-layout'
import Navigation from '../../components/navigation'
import './index.css'
import bg1 from './../../images/1.png'
import bg2 from './../../images/2.png'
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
        bannerClickIndex: 0,//0 4张靠左 1 4张靠右
        bannerHoverIndex: 1,
        equipmentIndex:0,
        starList:[],
        starPage:1,
        peoplePage:1,
        videoIndex:0
    }
    componentWillMount(){
        var arr = [bg1,bg2,bg1]
        this.setState({bannerBgList:arr});
        var star = [bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1,bg1,bg2,bg1]
        this.setState({starList:star});
    }
    changeClickIndex=(index)=>{
        var arr=[];
        index === 1 ? arr = [bg2,bg1,bg2] : arr = [bg1,bg2,bg1]
        this.setState({bannerBgList:arr});
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
                                <div style={{transform: (this.state.bannerHoverIndex === index ? "scale(1.14)" : '')}} 
                                    key={index} 
                                    onMouseEnter={this.toggleHover.bind(this,index)} 
                                    onMouseLeave={this.toggleHover.bind(this,index)}>
                                    <img src={bg} alt={index}></img>
                                    {this.state.bannerHoverIndex === index ? (
                                        <div className="default hover">
                                            <p>中国击剑俱乐部联赛激战横店 领略击剑魅力</p>
                                            <div className="play">
                                                <img src={playWS} alt=""></img>
                                                <span>立即播放</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="default">
                                            <p>中国击剑俱乐部联赛激战横店 领略击剑魅力</p>
                                            <div className="play">
                                                <img src={playOS} alt=""></img>
                                                <span>播放量：200</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="hot">
                            <p className="title">
                                <img src={hot} alt=""></img>
                                <span>今日头条</span>
                            </p>
                            <p className="detail">中国击剑俱乐部联赛激战横店 领略击剑魅力</p>
                            <p className="detail">决战一触即发 中国击剑俱乐部联赛横店站揭幕</p>
                            <p className="detail">领队点赞 中国击剑俱乐部联赛横店站圆满落幕</p>
                            <p className="detail">奥运冠军言传身教 中国击剑俱乐部联赛长春站圆满落幕</p>
                            <p className="detail">中国击剑俱乐部联赛长春站第二日</p>
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
                                <p className="time">12月6日</p>
                                <div className="content">
                                    <p>全国击剑冠军赛（第二站重剑）</p>
                                    <p style={{color:'#FF5D38'}}>12.10-12.15</p>
                                    <p>安徽合肥</p>
                                </div>
                            </div>
                            <div style={{color:'#333'}} className="hover">
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">12月6日</p>
                                <div className="content">
                                    <p>全国击剑冠军赛（第二站重剑）</p>
                                    <p style={{color:'#FF5D38'}}>12.10-12.15</p>
                                    <p>安徽合肥</p>
                                </div>
                            </div>
                            <div>
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">12月6日</p>
                                <div className="content">
                                    <p>全国击剑冠军赛（第二站重剑）</p>
                                    <p>12.10-12.15</p>
                                    <p>安徽合肥</p>
                                </div>
                            </div>
                            <div>
                                <div className="spot"></div>
                                <p className="title">近期赛程</p>
                                <p className="time">12月6日</p>
                                <div className="content">
                                    <p>全国击剑冠军赛（第二站重剑）</p>
                                    <p>12.10-12.15</p>
                                    <p>安徽合肥</p>
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
                                    <img src={bg1} alt=""></img>
                                    <div className="content">
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                                        <p>2019-11-11 14:40 新华社</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={bg1} alt=""></img>
                                    <div className="content">
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                                        <p>2019-11-11 14:40 新华社</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={bg1} alt=""></img>
                                    <div className="content">
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                                        <p>2019-11-11 14:40 新华社</p>
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
                                <div>
                                    <div className="name">
                                        <b>董丽</b> 国家队击剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国男子佩剑队运动员</p>
                                        <p>15岁之前是田径队员，15岁时由于身高过高被借调到篮球队参加比赛，在南通市比赛时，被击剑教练黄保华看中。1997年夏天，仲满正式学习击剑，教练黄保华。2005年，进入国家队。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="name">
                                        <b>董丽</b> 国家队击剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国男子佩剑队运动员</p>
                                        <p>15岁之前是田径队员，15岁时由于身高过高被借调到篮球队参加比赛，在南通市比赛时，被击剑教练黄保华看中。1997年夏天，仲满正式学习击剑，教练黄保华。2005年，进入国家队。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                            </div>
                        } 
                        {this.state.peoplePage === 2 &&
                            <div className="people">
                                <div>
                                    <div className="name">
                                        <b>董丽</b> 国家队击剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国男子佩剑队运动员</p>
                                        <p>15岁之前是田径队员，15岁时由g，在南通市比赛时，被击剑教练黄保华看中。1997年夏天，仲满正式学习击剑，教练黄保华。2005年，进入国家队。</p>
                                        <p>查看详情</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="name">
                                        <b>董丽</b> 国家队击剑运动员
                                    </div>
                                    <div className="introduce">
                                        <p>中国男子佩剑队运动员</p>
                                        <p>15岁之前是田径队员，15岁时由于身高过高被借调到篮球队参加比赛，在南通市比赛时，被击剑教练黄保华看中。1997年夏天，仲满正式学习击剑，教练黄保华。2005年，进入国家队。</p>
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
                            <li key={index}>
                                <img src={star} alt=""/>
                                <p>间距</p>
                            </li>
                        )}
                    </ul>
                </div>                 
                <div className="video_list">
                    <div className="tab">
                        <span onClick={this.changeVideoIndex.bind(this,0)} className={this.state.videoIndex === 0 ? 'active' : ''}>冠军赛</span>
                        <span onClick={this.changeVideoIndex.bind(this,1)} className={this.state.videoIndex === 1 ? 'active' : ''}>英雄传说</span>
                        <span onClick={this.changeVideoIndex.bind(this,2)} className={this.state.videoIndex === 2 ? 'active' : ''}>击剑情报局</span>
                        <span onClick={this.changeVideoIndex.bind(this,3)} className={this.state.videoIndex === 3 ? 'active' : ''}>击剑文化</span>
                    </div>
                    <div className="list">
                        <div className="leftInner" style={{backgroundImage:'url('+bg2+')'}}>
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
                                <p>2019-2020赛季全国击剑冠军赛（第一站）</p>
                                <p>中国击剑俱乐部联赛激战横店 领略击剑魅力</p>
                                <p>决战一触即发 中国击剑俱乐部联赛横店站揭幕</p>
                                <p>中国击剑俱乐部联赛长春站第二日</p>
                                <p>千名剑客共团圆 中国击剑俱乐部联赛长春站揭幕</p>
                            </div>
                        </div>
                        <ul className="rightInner">
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                            <li style={{backgroundImage:'url('+bg2+')'}}>
                                <div className="play">
                                    <img src={playOS} alt=""></img>
                                    <span>中国击剑俱乐部联</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="display">
                    <Layout title="机构风采">
                        <ul>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部-风采展示01</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部-风采展示02</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部-风采展示03</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部-风采展示04</p>
                            </li>
                        </ul>
                    </Layout>
                </div>
                <div className="knowledge_and_org_video">
                    <div className="knowledge">
                        <Layout title="击剑知识">
                            <div className="inner">
                                <p>击剑术语</p>
                                <p>观赛礼仪</p>
                                <p>击剑术语介绍-中英版</p>
                                <p>击剑项目比赛规则</p>
                                <p>查看更多</p>
                            </div>
                        </Layout>
                    </div>
                    <div className="org_video">
                        <Layout title="机构视频">
                            <ul className="inner">
                               <li style={{backgroundImage:'url('+bg2+')'}}>
                                    <div className="cover">
                                        <span>国家队击剑运动员</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：100</span>
                                        </div>
                                    </div>
                               </li>
                               <li style={{backgroundImage:'url('+bg2+')'}}>
                                    <div className="cover">
                                        <span>国家队击剑运动员</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：100</span>
                                        </div>
                                    </div>
                               </li>
                               <li style={{backgroundImage:'url('+bg2+')'}}>
                                    <div className="cover">
                                        <span>国家队击剑运动员</span>
                                        <div className="play">
                                            <img src={playOS} alt=""></img>
                                            <span>播放量：100</span>
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
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg2} alt=""></img>
                                        <p>击剑面罩</p>
                                    </div>
                                </div>
                                }
                                {this.state.equipmentIndex === 1 &&
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
                                }
                                <div className="spot">
                                    <span style={{background:this.state.equipmentIndex === 0 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,0)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,0)}></span>
                                    <span style={{background:this.state.equipmentIndex === 1 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,1)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,1)}></span>
                                    <span style={{background:this.state.equipmentIndex === 2 ? '#FF5D38' : '#DEDEDE'}}
                                    onMouseEnter={this.toggleEquipmentHover.bind(this,2)} 
                                    onMouseLeave={this.toggleEquipmentHover.bind(this,2)}></span>
                                </div>
                            </div>
                            <div className="rightInner">
                                <div>
                                    <p>器材知识</p>
                                    <p>击剑术语</p>
                                    <p>观赛礼仪</p>
                                    <p>击剑术语介绍-中英版</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>查看更多</p>
                                </div>
                                <div>
                                    <p>器材测评</p>
                                    <p>击剑术语</p>
                                    <p>观赛礼仪</p>
                                    <p>击剑术语介绍-中英版</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>击剑项目比赛规则</p>
                                    <p>查看更多</p>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
            </main>
        )
    }
};
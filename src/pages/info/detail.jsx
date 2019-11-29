import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../../components/navigation'
import bg1 from './../../images/1.png'
import './detail.css'
export default class info extends Component {
    render(){
        return (
            <main>
                <Navigation tab="info"></Navigation>
                <div className="detail_title"> 资讯 / 女重世界杯巴塞罗那站个人赛 朱明叶夺金</div>
                <div className="info_detail">
                    <div className="leftInner">
                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                        <p>新华社  2019-11-11 14:40</p>
                        <img src={bg1} alt=""></img>
                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                        <img src={bg1} alt=""></img>
                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                    </div>
                    <div className="rightInner">
                        <p>热门资讯</p>
                        <ul>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部联赛</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部联赛</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部联赛</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部联赛</p>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <p>中国击剑俱乐部联赛</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="changePiece">
                    <p>责任编辑: 裴超</p>
                    {this.props.match.params.id > 1 && 
                        <p><b>上一篇：</b><Link to={'/info/'+(parseInt(this.props.match.params.id)-1)}>团体赛第二日：中国队男重女花团体摘银铜</Link></p>
                    }
                    {this.props.match.params.id < 6 && 
                    <p><b>下一篇：</b><Link to={'/info/'+(parseInt(this.props.match.params.id)+1)}>2016-17赛季全国击剑冠军赛总决赛上海开幕</Link></p>
                    }
                </div>
            </main>
        )
    }
};
import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../../components/navigation'
import bg1 from './../../images/1.png'
import './index.css'
export default class info extends Component {
    state = {
        pageIndex:1
    }
    changePageIndex=(index)=>{
        this.setState({pageIndex:index})
    }
    render(){
        return (
            <main>
                <Navigation tab="info"></Navigation>
                <div className="headlines"> 
                    <p>今日头条</p>
                    <div className="container">
                        <div className="leftInner">
                            <img src={bg1} alt=""></img>
                            <div className="des">
                                <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。</p>
                            </div>
                        </div>
                        <ul className="rightInner">
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                            <li>
                                <img src={bg1} alt=""></img>
                                <div>中国击剑俱乐部联赛激战横店 领力</div>
                            </li>
                        </ul>
                    </div>
                </div>  
                <div className="info">
                    <p>资讯</p>
                    <ul>
                        {this.state.pageIndex === 1 &&
                        <div>
                            <Link to="info/1">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                            <Link to="info/2">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                            <Link to="info/3">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                            <Link to="info/4">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                            <Link to="info/5">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                        </div>
                        }
                        {this.state.pageIndex === 2 &&
                            <Link to="info/6">
                                <li>
                                    <div>
                                        <p>女重世界杯巴塞罗那站个人赛 朱明叶夺金</p>
                                        <p>新华社 2019-11-11 14:40</p>
                                        <p>据国际剑联11日消息，中国选手朱明叶在巴塞罗那当地时间9日举行的重剑世界杯分站赛中连克强敌，夺得金牌。中国队将于11日向团体奖牌发起冲击。朱明叶在八分之一决赛、四分之一决赛和半决赛中连续击败三名韩国选手，最后在决赛中与俄罗斯选手塔·安德鲁希娜相遇。后者大赛经验丰富，曾多次在世界杯分站赛中收获奖牌。决赛中，朱明叶稳扎稳打，战术比较稳健，一直在比分上领先，最后以15：7获胜。</p>
                                    </div>
                                    <div className="pic">
                                        <img src={bg1} alt=""></img>
                                    </div>
                                </li>
                            </Link>
                        }
                    </ul>
                    <div className="page">
                        <div className="btn">
                            <div className={this.state.pageIndex === 1 ? 'active' : ''} onClick={this.changePageIndex.bind(this,1)}>1</div>
                            <div className={this.state.pageIndex === 2 ? 'active' : ''} onClick={this.changePageIndex.bind(this,2)}>2</div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
};
import React from 'react';
import Navigation from '../../components/navigation'
import './index.css'
import bg1 from './../../images/1.png'
import bg2 from './../../images/2.png'
import playOS from './../../images/play_circle_orange_s.png'
import playWS from './../../images/play_circle_white_s.png'
import arrowBL from './../../images/arrow_bgblack_left.png'
import arrowBR from './../../images/arrow_bgblack_right.png'
// import arrowL from './../../images/arrow_left.png'
// import arrowR from './../../images/arrow_right.png'

export default class index extends React.Component {
    state = {
        bannerBgList:[],
        bannerClickIndex: 0,//0 4张靠左 1 4张靠右
        bannerHoverIndex: 1,
    }
    componentWillMount(){
        var arr = [bg1,bg2,bg1,bg2]
        this.setState({bannerBgList:arr});
    }
    render(){
        return (
            <main>
                <Navigation></Navigation>
                <div className="banner_container">
                    <div className="banner">
                        <div className="arrow arrowl">
                            <img src={arrowBL} alt=""></img>
                        </div>
                        <div className="arrow arrowr">
                            <img src={arrowBR} alt=""></img>
                        </div>
                        <div className="pic">
                            {this.state.bannerBgList.map((bg,index) =>
                                <div style={{backgroundImage:"url("+bg+")",transform: (this.state.bannerHoverIndex === index ? "scale(1.14)" : ''),marginLeft: -this.state.bannerClickIndex*3.05+"rem"}} key={index}>
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
                    </div>
                </div>
            </main>
        )
    }
};
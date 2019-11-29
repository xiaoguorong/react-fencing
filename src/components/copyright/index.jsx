import React from 'react';
import './index.css'
import gongan from './../../images/gongan.png'
import szicbok from './../../images/szicbok.png'
export default class Copyright extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Copyright © 1998 - 2019 斐诺（江苏）体育发展有限公司. All Rights Reserved.</p>
                <p>苏州市吴中区东吴北路111号东吴乐享汇二楼   电话：4000896616   传真：0512-69168333</p>
                <div>
                    <img src={gongan} alt=""></img>
                    <span> 苏ICP备18050939号</span>
                    <img src={szicbok} alt=""></img>
                    <span>苏公网安备32050802010878号</span>
                </div>
            </div>
        );
    }
}
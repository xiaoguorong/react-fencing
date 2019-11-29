import React from 'react';
import './index.css'
import arrow from './../../images/arrow_more_left.png'
export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <div>
                    <span>{this.props.title}</span>
                    <img src={arrow} alt=""></img>    
                    <span>{this.props.moreTitle ? this.props.moreTitle : '更多'}</span>
                </div>
                {this.props.children}
            </div>
        );
    }
}
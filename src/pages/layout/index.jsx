import React from 'react';
import Copyright from '../../components/copyright'

export default class layout extends React.Component {
   
    render(){
        return (
            <main>
                {this.props.children}
                <Copyright></Copyright>
            </main>
        )
    }
};
import React, { Component } from 'react'
import './case.css'

class Case extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        let htmlDom = null;
        if(this.props.index%3 === 0 ){
            htmlDom = <div className="case-f-layout">
                <a href="javascript:void(0)"><img className="case-f-banner" src={this.props.data.img} /></a>
                <div className="f-title">{this.props.data.title}</div>
                <div className="f-desc">{this.props.data.desc}</div>
            </div>
        }else {
            htmlDom = <div className="case-s-layout">
                <a href="javascript:void(0)"><img className="case-s-banner" src={this.props.data.img} /></a>
                <div className="f-title">{this.props.data.title}</div>
                <div className="f-desc">{this.props.data.desc}</div>
            </div>
        }
        return <div className="case-content">
            {htmlDom}
        </div>
    }
}

export default Case
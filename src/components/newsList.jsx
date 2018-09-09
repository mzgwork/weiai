import React, { Component } from 'react'
import './newsList.css'

class NewsList extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let renderHtml = null;
        renderHtml = (this.props.data || []).map((item,index) => {
            return <div key={index} className="content-layout">
                <div className="desc-layout">{item.desc}</div>
                <div className="date-layout">{item.date}</div>
            </div>
        })
        return <div>{renderHtml}</div>
    }
}

export default NewsList
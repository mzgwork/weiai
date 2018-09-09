import React, { Component } from 'react'
import './newsPageList.css'

class NewsPageList extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let renderHtml = null;
        renderHtml = (this.props.data || []).map((item,index) => {
            return <div key={index} className="news-page-layout">
                <div className="news-page-banner"><img src={item.img} alt=""/></div>
                <div className="news-title-layout">{item.title}</div>
                <div className="news-date-layout">{item.date}</div>
                <div className="news-desc-layout">{item.desc}</div>
            </div>
        })
        return <div>{renderHtml}</div>
    }
}

export default NewsPageList
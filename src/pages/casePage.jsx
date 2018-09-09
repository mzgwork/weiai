import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import './casePage.css'
import logo from '../images/wanke.png'
import demand from '../images/xuqiu.png'
import offer from '../images/baojia.png'
import case2 from '../images/case2.png'

class casePage extends Component {
    render () {
        return (
            <div>
                <div className="top-banner"></div>
                <div className="cases-brand">
                    <img src={logo} alt=""/>
                    <div className="case-btn-brand">
                        <span className="demand case-btn-img"><img src={demand} alt=""/></span>
                        <span className="offer case-btn-img"><img src={offer} alt=""/></span>
                    </div>
                </div>
                <div className="project-content">
                    <div className="text-title">解决方案</div>
                    <div className="project-img-layout">
                        <div className="project-item">
                            <span className="project-icon project-icon-p1"></span>
                            <p>上门勘探</p>
                        </div>
                        <div className="project-item">
                            <span className="project-icon project-icon-p2"></span>
                            <p>了解沟通</p>
                        </div>
                        <div className="project-item">
                            <span className="project-icon project-icon-p3"></span>
                            <p>检查虫害</p>
                        </div>
                        <div className="project-item">
                            <span className="project-icon project-icon-p4"></span>
                            <p>物理化学灭杀</p>
                        </div>
                    </div>
                </div>

                <div className="live">
                    <div className="text-title">万科消杀现场</div>
                    <div className="live-case">
                        <div className="case">
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="qa">
                    <div className="text-title">客户评价</div>
                    <div className="qa-item">
                        <div className="qa-icon"></div>
                        <div className="qa-item-text">
                            <span className="qa-client"><span className="name">申女士</span>(17****0354)  2017-09-01  <span>服务类型:</span>灭蟑螂单次</span>
                            <p><span>服务评价:</span>服务必须夸奖-下,本来约的29号晚上的，因为有事临时取消了，客服莎莎很nice的又给另外约了个时间，工程师来的时候还给我电话确认了下,家里到处都检查了撒了药，今天开始出现了部分死的虫子，期待过几天的效果~~~</p>
                        </div>
                    </div>
                    <div className="qa-item">
                        <div className="qa-icon"></div>
                        <div className="qa-item-text">
                            <span className="qa-client"><span className="name">申女士</span>(17****0354)  2017-09-01  <span>服务类型:</span>灭蟑螂单次</span>
                            <p><span>服务评价:</span>服务必须夸奖-下,本来约的29号晚上的，因为有事临时取消了，客服莎莎很nice的又给另外约了个时间，工程师来的时候还给我电话确认了下,家里到处都检查了撒了药，今天开始出现了部分死的虫子，期待过几天的效果~~~</p>
                        </div>
                    </div>
                </div>

                <div className="live">
                    <div className="live-case">
                        <div className="case">
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                            <div className="case-item">
                                <img src={case2} alt=""/>
                                <h3>案例标题</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(casePage)
import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import './problem.css'
import case2 from '../images/case2.png'

class problem extends Component {
    render () {
        return (
            <div>
                <div className="top-banner"></div>

                <div className="qa-container-layout">
                    <div className="qa-container-list">
                        <div className="qa-header">
                            <div className="qa-icon-text">Q</div>
                            <div>日常生活中怎么解决蚊虫叮咬的问题？</div>
                        </div>
                        <div className="qa-bottom">
                            <div className="qa-icon-text qa-icon-a">A</div>
                            <div className="qa-container-text">
                            生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。
                            </div>
                        </div>
                    </div>
                    <div className="qa-container-list">
                        <div className="qa-header">
                            <div className="qa-icon-text">Q</div>
                            <div>日常生活中怎么解决蚊虫叮咬的问题？</div>
                        </div>
                        <div className="qa-bottom">
                            <div className="qa-icon-text qa-icon-a">A</div>
                            <div className="qa-container-text">
                            生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。
                            </div>
                        </div>
                    </div>
                    <div className="qa-container-list">
                        <div className="qa-header">
                            <div className="qa-icon-text">Q</div>
                            <div>日常生活中怎么解决蚊虫叮咬的问题？</div>
                        </div>
                        <div className="qa-bottom">
                            <div className="qa-icon-text qa-icon-a">A</div>
                            <div className="qa-container-text">
                            生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。
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

export default withRouter(problem)
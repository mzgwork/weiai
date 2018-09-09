import React, { Component } from 'react'
import NewsPageList from '../components/newsPageList'
import {withRouter} from "react-router-dom"
import './news.css'
import p1 from '../images/banner.png'
import p2 from '../images/case.png'

class news extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: '公司新闻' },
                { title: '行业新闻' }
            ],
            newsData: [
                {
                    title: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    desc: '法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍，怀疑与幼儿园及小学附近的葡萄园使用的杀虫剂有关卫生当局的最新调查指出..',
                    img: p1,
                    date:'2018-05-13'
                },
                {
                    title: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    desc: '法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍，怀疑与幼儿园及小学附近的葡萄园使用的杀虫剂有关卫生当局的最新调查指出..',
                    img: p1,
                    date:'2018-05-23'
                },
                {
                    title: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    desc: '法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍，怀疑与幼儿园及小学附近的葡萄园使用的杀虫剂有关卫生当局的最新调查指出..',
                    img: p1,
                    date:'2018-11-10'
                }
            ],
            IndustryData: [
                {
                    title: '新闻标题2',
                    desc: '疑与使用杀虫剂有关',
                    date:'2017-06-13',
                    img: p2
                },
                {
                    title: '新闻标题2',
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-07-24',
                    img: p2
                },
                {
                    title: '新闻标题2',
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-11-10',
                    img: p2
                }
            ],
            active:0
        }
        this.tabClick = this.tabClick.bind(this)
    }

    tabClick(key) {
        this.setState({
            active:key
        })
    }

    render() {
        return (
            <div>
                <div className="news-top-bar">
                    {
                        this.state.tabs.map((item,index) => {
                            return (
                                <span className="news-top-item" className={`news-top-item ${this.state.active == index? 'on' : ''}`} key={index} onClick={() => {this.tabClick(index)}}>{item.title}</span>
                            )
                        })
                    }
                </div>
                <div className="news-list-layout">
                    {
                        this.state.active == 0 ? <NewsPageList data={this.state.newsData} /> : <NewsPageList data={this.state.IndustryData} />
                    }
                    
                </div>

            </div>
        )
    }
}

export default withRouter(news)
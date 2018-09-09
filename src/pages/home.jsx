import React, { Component } from 'react'
import { Carousel, WingBlank, Grid, Tabs, WhiteSpace } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky'
import {withRouter} from "react-router-dom"
import ServiceBar from '../components/serviceBar'
import Case from '../components/case'
import NewsList from '../components/newsList'
import './home.css'
import banner from '../images/banner.png'
import place1 from '../images/place1.png'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'
import p8 from '../images/p8.png'
import p9 from '../images/p9.png'
import caseImg from '../images/case.png'
import caseImg2 from '../images/case2.png'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            tabs: [
                { title: '公司新闻' },
                { title: '行业新闻' }
            ],
            imgHeight: 176,
            placeData: [
                {
                    icon: p1,
                    text: '家庭社区'
                },
                {
                    icon: p2,
                    text: '餐厅行业'
                },
                {
                    icon: p3,
                    text: '写字楼办公室'
                },
                {
                    icon: p4,
                    text: '超市卖场'
                },
                {
                    icon: p5,
                    text: '物流仓储'
                },
                {
                    icon: p6,
                    text: '食品厂工厂'
                },
                {
                    icon: p7,
                    text: '娱乐场所美容院'
                },
                {
                    icon: p8,
                    text: '学校医院'
                },
                {
                    icon: p9,
                    text: '其他行业'
                }
            ],
            caseData: [
                {
                    img: caseImg,
                    title: '案例标题',
                    desc: '案例描述'
                },
                {
                    img: caseImg2,
                    title: '案例标题',
                    desc: '案例描述'
                },
                {
                    img: caseImg2,
                    title: '案例标题',
                    desc: '案例描述'
                },
                {
                    img: caseImg,
                    title: '案例标题',
                    desc: '案例描述'
                },
                {
                    img: caseImg2,
                    title: '案例标题',
                    desc: '案例描述'
                },
                {
                    img: caseImg2,
                    title: '案例标题',
                    desc: '案例描述'
                }
            ],
            newsData: [
                {
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-05-13'
                },
                {
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-05-23'
                },
                {
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-11-10'
                }
            ],
            IndustryData: [
                {
                    desc: '疑与使用杀虫剂有关',
                    date:'2017-06-13'
                },
                {
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-07-24'
                },
                {
                    desc: '法国产酒区儿童患癌率升高 疑与使用杀虫剂有关',
                    date:'2018-11-10'
                }
            ]
        }
    }

    renderTabBar(props) {
        return (<Sticky>
            {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
        </Sticky>);
    }

    render() {
        return (
            <div>
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="javascript:void(0)"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={banner}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <h2 className="home-sub-title">家庭 企业服务项目</h2>
                <ServiceBar />
                <h2 className="home-sub-title">服务场所</h2>
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="javascript:void(0)"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={place1}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <div className="palce-grid-layout">
                    <Grid data={this.state.placeData} activeStyle={false} columnNum={3} />
                </div>

                <h2 className="home-sub-title">服务案例</h2>
                <div className="home-content">
                    {
                        this.state.caseData.map((item,index) => {
                            return <Case data={item} index={index} key={index} />
                        })
                    }
                </div>

                <div className="public-container">
                    <WhiteSpace />
                        <StickyContainer>
                        <Tabs tabs={this.state.tabs}
                            initalPage={'t2'}
                            renderTabBar={this.renderTabBar}
                        >
                            <div style={{ display: 'flex', alignItems: 'center',backgroundColor: '#fff' }}>
                                <NewsList data={this.state.newsData} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                                <NewsList data={this.state.IndustryData} />
                            </div>
                        </Tabs>
                        </StickyContainer>
                    <WhiteSpace />
                    <a href="javascript:void(0)" className="more-btn">浏览更多</a>
                </div>

            </div>
        )
    }
}

export default withRouter(Home)
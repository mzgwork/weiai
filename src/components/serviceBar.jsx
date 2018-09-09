import React, { Component } from 'react'
import './serviceBar.css'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import s6 from '../images/s6.png'
import s7 from '../images/s7.png'
import s8 from '../images/s8.png'

class serviceBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {
                    text: '灭蟑螂',
                    icon: s1
                },
                {
                    text: '灭老鼠',
                    icon: s2
                },
                {
                    text: '灭苍蝇',
                    icon: s3
                },
                {
                    text: '灭蚊子',
                    icon: s4
                },
                {
                    text: '灭跳蚤',
                    icon: s5
                },
                {
                    text: '甲醛治理',
                    icon: s6
                },
                {
                    text: '灭蚂蚁',
                    icon: s7
                },
                {
                    text: '灭白蚁',
                    icon: s8
                }
            ]
        }
    }
    render () {
        return <div className="service-layout">
            {
                this.state.data.map((item,index) => <div className="bar-item" key={index}>
                    <div className="bar-item-layout"><img src={item.icon} className="bar-item-icon" alt="" /></div>
                    {item.text}
                </div>)
            }
        </div>
    }
}

export default serviceBar
import React, { Component } from 'react'
import './appFooter.css'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import tel from '../images/tel.png'
import wechat from '../images/wechat.png'
import qrcode from '../images/qrcode.png'

class appFooter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="public-container">
                    <div className="f-item-layout">
                        <div className="f-img-layout">
                            <img src={f1} alt="" />
                        </div>
                        <div className="f-content-layout">
                            <span>专业人员</span>
                            <p>培训上岗，技能满分</p>
                        </div>
                    </div>
                    <div className="f-item-layout">
                        <div className="f-img-layout">
                            <img src={f2} alt="" />
                        </div>
                        <div className="f-content-layout">
                            <span>安全环保</span>
                            <p>国际进口，药品合格</p>
                        </div>
                    </div>
                    <div className="f-item-layout">
                        <div className="f-img-layout">
                            <img src={f3} alt="" />
                        </div>
                        <div className="f-content-layout">
                            <span>快速便捷</span>
                            <p>响应迅速，100%准时</p>
                        </div>
                    </div>
                    <div className="f-item-layout">
                        <div className="f-img-layout">
                            <img src={f4} alt="" />
                        </div>
                        <div className="f-content-layout">
                            <span>资质齐全</span>
                            <p>PCO资质防制机构</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <a type="phone" href="tel:18874977350" className="contact-layout-btn"><img src={tel} alt="" />联系凯佳售前专员</a>
                </div>

                <div className="footer-layout">
                    <div className="footer-left">
                        <img src={wechat} className="wechat-laout" alt="" />
                        <div className="footer-text">
                            请选择图中二维码<br/>
                            按住二维码一秒<br/>
                            即关注韦爱环保微信
                        </div>
                    </div>
                    <img src={qrcode} className="qrcode-layout" alt="" />
                </div>
            </div>
        )
    }
}

export default appFooter
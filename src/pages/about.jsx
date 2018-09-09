import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './about.css'
import certificate from '../images/zhengshu.png'
import zizhi from '../images/zizhi.png'
import youshi from '../images/youshi.png'
import lenovologo from '../images/lenovologo.png'
import case2 from '../images/case2.png'

class About extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div className="top-banner"></div>
                <div className="about-concise">
                <div className="text-title">企业介绍</div>
                <div className="about-logo"></div>
                <h3 className="about-slogan">致力于家庭环保一站式健康服务安全环保</h3>
                <p className="about-text">本公司专为家庭、企业上门提供消杀虫害服务， 具备长沙市有害生物防制服务协会资质、是长沙市生物防治协会会员单位,享有正规行业资质，我们的服务被广泛应用在大厦、美容院、医院、学校、政府机关、宾馆、饭店、工厂、超市、家庭、公园等诸多领域。公司致力于开发高环保、高品质的卫生杀虫、和有害生物防治服务工作。<br/>
凯佳基于互联网的思维模式，以高速、高效、高感受服务理念服务于每一个客户，同时借此机会，改善服务行业的服务标准，提升服务质量，为客户提供更加快速标准化，透明化服务体质，同时也是对传统服务体系的变革。</p>
                </div>
                <div className="serve">
                    <div className="text-title">企业介绍</div>
                    <p className="serve-text">
                    我们以服务快速，响应迅速为前提，为您解决烦劳<br/>
                    以工作高效，灭虫见效为目的，为您解决后顾之忧<br/>
                    以耐心热情、服务细心为态度，带给您舒心的感受
                    </p>
                </div>
                <div className="certificate">
                    <div className="text-title">资质证书</div>
                    <div className="certificate-container">
                        <div className="certificate-img">
                            <img src={certificate} alt="" className="img-border"/>
                            <p>证书名称</p>
                        </div>
                        <div className="certificate-img">
                            <img src={certificate} alt="" className="img-border" />
                            <p>证书名称</p>
                        </div>
                    </div>
                </div>

                <div className="qualification">
                    <div className="text-title">技术人员资质</div>
                    <div className="qual-img-layout">
                        <img src={zizhi} alt="" className="qual-img" />
                    </div>
                </div>

                <div className="advantage">
                    <div className="text-title">服务优势</div>
                    <p className="advantage-text">以高速、高效、高感受服务理念服务于每一个客户，同时借此机会，改善服务行业的服务标准，提升服务质量，为客户提供更加快速标准化，透明化服务体质，同时也是对传统服务体系的变革。</p>
                    <img src={youshi} alt="" className="advantage-img" />
                </div>

                <div className="partners">
                    <div className="text-title">合作伙伴</div>
                    <div className="logo">
                        <div className="logo-item"><img src={lenovologo} alt=""/></div>
                        <div className="logo-item"><img src={lenovologo} alt=""/></div>
                        <div className="logo-item"><img src={lenovologo} alt=""/></div>
                    </div>
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
        )
    }
}

export default withRouter(About)
import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import './reason.css'
import reasonicon1 from '../images/reasonicon1.png'
import reasonicon2 from '../images/reasonicon2.png'
import reasonicon3 from '../images/reasonicon3.png'
import case2 from '../images/case2.png'

class reason extends Component {
    render() {
        return (
            <div>
                <div className="top-banner"></div>
                <div className="reason-layout">
                    <div className="text-title">选择杀千虫的理由</div>
                    <div className="reason-item">
                        <div className="reason-icon"><img src={reasonicon1} alt="" /></div>
                        <p className="reason-text">本公司专为家庭、企业上门提供消杀虫害服务， 具备北京市有害生物防制服务协会资质、是北京有害生物防治协会会员单位,享有正规行业资质，我们的服务被广泛应用在大厦、美容院、医院、学校、政府机关</p>
                    </div>

                    <div className="reason-item">
                        <div className="reason-icon"><img src={reasonicon2} alt="" /></div>
                        <p className="reason-text">本公司专为家庭、企业上门提供消杀虫害服务， 具备北京市有害生物防制服务协会资质、是北京有害生物防治协会会员单位,享有正规行业资质，我们的服务被广泛应用在大厦、美容院、医院、学校、政府机关</p>
                    </div>

                    <div className="reason-item">
                        <div className="reason-icon"><img src={reasonicon3} alt="" /></div>
                        <p className="reason-text">本公司专为家庭、企业上门提供消杀虫害服务， 具备北京市有害生物防制服务协会资质、是北京有害生物防治协会会员单位,享有正规行业资质，我们的服务被广泛应用在大厦、美容院、医院、学校、政府机关</p>
                    </div>

                    <div className="reason-content-text">
                    基于互联网的思维模式，以高速、高效、高感受服务理念服务于每一个客户，同时借此机会，改善服务行业的服务标准，提升服务质量，为客户提供更加快速标准化透明化服务体质，同时也是对传统服务体系的变革。<br/>
    我们的服务宗旨是：我们以服务快速，响应迅速为前提，为您解决烦劳；以工作高效，灭虫见效为目的，为您解决后顾之忧；以耐心热情、服务细心为态度，带给您舒心的感受。
                    </div>

                    <div className="reason-case">
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

export default withRouter(reason)
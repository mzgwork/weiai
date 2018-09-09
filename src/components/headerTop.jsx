import React, { Component } from 'react'
import { Menu, ActivityIndicator, NavBar, Icon } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import logo from '../images/logo.png'
import phone from '../images/phone.svg'
import './headerTop.css'

const data = [
    {
        value: '/',
        label: '首页',
    }, {
        value: 'news',
        label: '虫害防治',
    },
    {
        value: 'casePage',
        label: '服务案例',
    },
    {
        value: 'reason',
        label: '服务场所',
    },
    {
        value: 'problem',
        label: '常见问题',
    },
    {
        value: 'about',
        label: '关于我们',
        isLeaf: true,
    },
];

class headerTop extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    onChange = (value) => {
        this.setState({
            show: !this.state.show,
        });
        this.props.history.push(value[0])
    }

    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        this.setState({
            initData: data,
        });

        // if (!this.state.initData) {
        //     setTimeout(() => {
            
        //     }, 500);
        // }
    }

    render () {
        const { initData, show } = this.state;
        const menuEl = (
        <Menu
            className="single-foo-menu"
            data={initData}
            value={['1']}
            level={1}
            onChange={this.onChange}
            height={document.documentElement.clientHeight * 0.6}
        />
        );
        const loadingEl = (
        <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </div>
        );
        return (
            <div className={show ? 'single-menu-active' : ''}>
                <div>
                <NavBar
                    leftContent={<img src={logo} alt='logo' className="header-top-logo" />}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <a key="1" type="phone" href="tel:18868809683"><img className="phone-layout" src={phone} alt='拨号'/></a>,
                        <Icon key="2" type="ellipsis" onClick={this.handleClick} />,
                    ]}
                    mode="light"
                    className="single-top-nav-bar"
                >
                </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
            </div>
        );
    }
}

export default withRouter(headerTop)
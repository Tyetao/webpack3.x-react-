import React, { Component } from 'react';

import './Page1.css';
import Tabs from 'components/Tabs/js/Tabs';
import TabPane from 'components/Tabs/js/TabPane';
import image from './images/bg.jpg';

export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            activeIndex: 0,
        };
    }

    handleChange(e) {
        this.setState({
            activeIndex: parseInt(e.target.value, 10),
        });
    }

    render() {
        return (
            <div className="page-box">
                <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
                    <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
                    <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
                    <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
                </Tabs>
                this is page1~
                <img src={image} />
            </div>
        )
    }
}
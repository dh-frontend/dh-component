import React from 'react';
import {Tooltip} from '../../src';
import './tooltip.scss';

class TooltipDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dh-tooltip-demo">
                <div style={{
                    marginLeft: "60px"
                }}>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="topLeft">
                        <a href="#">TL</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="top">
                        <a href="#">Top</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="topRight">
                        <a href="#">TR</a>
                    </Tooltip>
                </div>
                <div style={{
                    width: "60px",
                    float: "left"
                }}>
                    <Tooltip  trigger="click" overlay="tooltip text" placement="leftTop">
                        <a href="#">LT</a>
                    </Tooltip>
                    <Tooltip  trigger="click" overlay="tooltip text" placement="left">
                        <a href="#">Left</a>
                    </Tooltip>
                    <Tooltip  trigger="click" overlay="tooltip text" placement="leftBottom">
                        <a href="#">LB</a>
                    </Tooltip>
                </div>
                <div style={{
                    width: "60px",
                    marginLeft: "270px"
                }}>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="rightTop">
                        <a href="#">RT</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="right">
                        <a href="#">Right</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="rightBottom">
                        <a href="#">RB</a>
                    </Tooltip>
                </div>
                <div style={{
                    marginLeft: "60px",
                    clear: "both"
                }}>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="bottomLeft">
                        <a href="#">BL</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="bottom">
                        <a href="#">Bottom</a>
                    </Tooltip>
                    <Tooltip  trigger="hover" overlay="tooltip text" placement="bottomRight">
                        <a href="#">BR</a>
                    </Tooltip>
                </div>
            </div>
        )
    }
}
export default TooltipDemo;

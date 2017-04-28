import React from 'react';
import Mark from './component/mark';
import { Tooltip,  Button } from '../src';
import docTooptip from '../doc/tooptip.md';
class TooptipTest extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			index: 0
		};
	}

	render() {

		return (
      <div>
        <div className="tooltip-test">
          <div className="tooltip-test-left">
            <Tooltip placement="leftTop" overlay="提示文字">
              <Button>左上</Button>
            </Tooltip>
            <Tooltip placement="left" overlay="提示文字">
              <Button >左边</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" overlay="提示文字">
                <Button>左下</Button>
            </Tooltip>
          </div>
          <div className="tooltip-test-top">
            <Tooltip placement="topLeft" overlay="提示文字">
              <Button>上左</Button>
            </Tooltip>
            <Tooltip placement="top" overlay="提示文字">
              <Button >上边</Button>
            </Tooltip>
            <Tooltip placement="topRight" overlay="提示文字">
                <Button>上右</Button>
            </Tooltip>
          </div>
          <div className="tooltip-test-right">
            <Tooltip placement="rightTop" overlay="提示文字">
              <Button>右上</Button>
            </Tooltip>
            <Tooltip placement="right" overlay="提示文字">
              <Button >右边</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" overlay="提示文字">
                <Button>右下</Button>
            </Tooltip>
          </div>
          <div className="tooltip-test-bottom">
            <Tooltip placement="bottomLeft" overlay="提示文字">
              <Button>下左</Button>
            </Tooltip>
            <Tooltip placement="bottom" overlay="提示文字">
              <Button >下边</Button>
            </Tooltip>
            <Tooltip placement="bottomRight" overlay="提示文字">
                <Button>下右</Button>
            </Tooltip>
          </div>

        </div>
        <Mark content={docTooptip}/>
      </div>
		);
	}
}

export default TooptipTest;

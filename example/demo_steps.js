import React from 'react';
import Mark from './component/mark'
import { Steps, Button } from '../src';

class StepsTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
    this.hanldeClick = this.hanldeClick.bind(this);
  }
  hanldeClick() {
    this.setState({
      current: this.state.current + 1
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.hanldeClick}>下一步</Button>
        <div style={{ marginTop: 20}}>
          <h2>我是默认的色彩步骤条</h2>
          <Steps current={this.state.current}>
            <Steps.Step />
            <Steps.Step />
            <Steps.Step />
          </Steps>

        </div>
        <div style={{ marginTop: 20}}>
          <h2>我可以配置线条</h2>
          <Steps
            lineOption={{
              weight: 10,
              color: "#2799c3",
              transitionColor: 'red'
            }}
            current={this.state.current}>
            <Steps.Step />
            <Steps.Step />
            <Steps.Step />
          </Steps>
        </div>
        <div style={{ marginTop: 20}}>
          <h2>我还可以配置头元素</h2>
          <Steps
            headOption={{
              bgColor: "#2799c3",
              color: "#dadd59",
              transitionColor: "#423b1f",
              transitionBgColor: "#77b182"
            }}
            current={this.state.current}>
            <Steps.Step />
            <Steps.Step />
            <Steps.Step />
          </Steps>
        </div>
        <div style={{ marginTop: 20}}>
          <h2>我还可以配置提示信息</h2>
          <Steps
            mainOption={{
              color: "#dadd59",
              transitionColor: "#423b1f",
            }}
            current={this.state.current}>
            <Steps.Step />
            <Steps.Step />
            <Steps.Step />
          </Steps>
        </div>
        <div style={{ marginTop: 20}}>
          <h2>我可以更改元素</h2>
          <Steps
            key="b"
            current={this.state.current}>
            <Steps.Step icon="3"/>
            <Steps.Step icon="4"/>
            <Steps.Step icon="5"/>
          </Steps>
        </div>
      </div>
    )
  }
}
export default StepsTest;

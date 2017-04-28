import React from 'react';
import Mark from './component/mark'
import { Steps } from '../src';

class StepsTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{height: 50, backgroundColor: '#50d27c'}}>
          <Steps current={1} status="process">
            <Steps.Step title="上传" icon={(<span>1</span>)}/>
            <Steps.Step title="预览" icon={(<span>2</span>)}/>
            <Steps.Step title="3" icon={(<span>3</span>)}/>
          </Steps>
        </div>

      </div>
    )
  }
}
export default StepsTest;

import React from 'react';
import { Section } from '../../src';
class SectionTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
        <Section backgroundColor="red">测试</Section>
      </div>
    )
  }
}
export default SectionTest;

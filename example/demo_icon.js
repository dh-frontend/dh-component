import React from 'react';
import Mark from './component/mark'
import { Icon } from '../src';
import docIcon from '../doc/icon.md';
import json from './icon.json';
class IconTest extends React.Component {
  constructor(props) {
    super(props);
  }
  renderIcons(maps) {
    return Object.keys(maps).map(key => {
      return (
        <div className="test-icon-item" key={key}>
          <h2><Icon type={key}/></h2>
          <p>{`dh-icon-${key}`}</p>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="test-icon">
        <div className="test-icon-box">{this.renderIcons(json)}</div>
        <Mark content={docIcon}/>
      </div>
    )
  }
}
export default IconTest;

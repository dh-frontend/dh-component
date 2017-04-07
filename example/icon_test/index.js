import React from 'react';
import Markdown from '../home/Markdown'
import { Icon } from '../../src';
import icons from './icon.json';
import md from './icon.md';
class IconTest extends React.Component {
  constructor(props) {
    super(props);
  }
  renderIcons(maps) {
    return Object.keys(maps).map(key => {
      return (
        <div className="test-icon-item">
          <h2><Icon type={key}/></h2>
          <p>{`dh-icon-${key}`}</p>
        </div>
      )
    })
  }
  render() {
    console.log(icons);
    return (
      <div className="test-icon">
        <div className="test-icon-box">{this.renderIcons(icons)}</div>
        <Markdown content={md}/>
      </div>
    )
  }
}
export default IconTest;

import React from 'react';
import { Icon } from '../../src';
import icons from './icon.json';
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
        {this.renderIcons(icons)}
      </div>
    )
  }
}
export default IconTest;

import React from 'react';
import json from './icon.json';
import { Icon } from '../../src';
const style = {
  parent: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
    
  },
  child: {
    width: 120,
    height: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export default class IconList extends React.Component {
  render() {
    console.log(json);
    return (
      <div style={style.parent}>
        {
          Object.keys(json).map(key => (
            <div style={style.child}>
              <p><Icon type={key}/></p>
              <p style={{fontSize: 10}}>{key}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
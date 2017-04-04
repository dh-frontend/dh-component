import React from 'react';
import RcTooltip from 'rc-tooltip';

const prefixCls= 'dh-tooltip';

export default class Tooltip extends React.Component {
  getContentElement() {
    const { title, name } = this.props;
    return (
      <div className={`${prefixCls}-container`}>
          { name ?
            <div>
              由 {<span style={{fontWeight:'bold'}}>{name}</span>} {title}
            </div> :
            title
           }
      </div>
    )
  }
  render() {
    const { placement, trigger } =this.props;
    const overlay = this.getContentElement();
    return (
      <RcTooltip
        overlay={overlay}
        placement={placement}
        prefixCls={prefixCls}
        trigger={trigger}
      >
       {this.props.children}
      </RcTooltip>
    )
  }
}

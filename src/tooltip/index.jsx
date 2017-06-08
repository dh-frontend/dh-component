import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';
// import * as RcTooltip from 'antd';

export default class Tooltip extends RcTooltip {}
Tooltip.displayName = 'dh-tooltip';
Tooltip.propTypes = RcTooltip.propTypes;

Tooltip.defaultProps = Object.assign(RcTooltip.defaultProps, {
  prefixCls: 'dh-tooltip',
  mouseLeaveDelay: 0
});

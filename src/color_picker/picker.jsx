import React from 'react';
import RcColorPicker from 'rc-color-picker';

export default class ColorPick extends RcColorPicker {}
ColorPick.displayName = 'dh-tooltip';
ColorPick.propTypes = RcColorPicker.propTypes;

ColorPick.defaultProps = Object.assign(RcColorPicker.defaultProps, {
  prefixCls: 'dh-color-picker',
});

import React from 'react';

import RcSteps from 'rc-steps';

export default class Steps extends RcSteps {}
Steps.displayName = 'dh-tooltip';
Steps.propTypes = RcSteps.propTypes;

Steps.defaultProps = Object.assign(RcSteps.defaultProps, {
  prefixCls: 'dh-steps',
});

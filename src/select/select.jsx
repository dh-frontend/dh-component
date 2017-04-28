import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import RcSelect from 'rc-select';

class Select extends RcSelect {}
Select.displayName = 'Select';
Select.defaultProps = assign({}, RcSelect.defaultProps, {
  prefixCls: 'dh-select',
  optionLabelProp: 'children',
  transitionName: 'selectSlideUp',
  showSearch: false,
  tags: false
});

export default Select;

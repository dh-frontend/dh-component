import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PureRenderMixin from 'rc-util/lib/PureRenderMixin';
import warn from 'rc-util/lib/warn';
import  { FIELD_META_PROP } from './constants';
import { Row, Col } from '../index';
class FormItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    colon: PropTypes.bool,
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }
  static contextTypes = {
    form: PropTypes.object,
  };
  static defaultProps = {
    colon: false,
    labelCol: {
      span: 4
    }
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    warn(
      this.getControls(this.props.children, true).length <= 1,
      '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' +
      'while there are more than one `getFieldDecorator` in it.',
    );
  }
  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  getHelpMsg() {
    const context = this.context;
    const props = this.props;
    if (props.help === undefined && context.form) {
      return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
    }
    return props.help;
  }
  /* 处理 自动验证*/ 
  getControls(children, recursively) {
    let controls = [];
    const childrenArray = React.Children.toArray(children);
    for (let i = 0; i < childrenArray.length; i++) {
      if (!recursively && controls.length > 0) {
        break;
      }
      const child = childrenArray[i];
      if (child.type === FormItem) {
        continue;
      }
      if (!child.props) {
        continue;
      }
      if (FIELD_META_PROP in child.props) {
       controls.push(child);
      } else if (child.props.children) {
         controls = controls.concat(this.getControls(child.props.children, recursively));
      }
    }
    return controls;
  }
  getOnlyControl() {
    const child = this.getControls(this.props.children, false)[0];
    return child !== undefined ? child : null;
  }
  getChildProp(prop) {
    const child = this.getOnlyControl();
    return child && child.props && child.props[prop];
  }
  getId() {
    return this.getChildProp('id');
  }
  getMeta() {
    return this.getChildProp(FIELD_META_PROP);
  }
  renderHelp() {
    const prefixCls = this.props.prefixCls;
    const help = this.getHelpMsg();
    return help ? (
      <div className={`dh-form-explain`} key="help">
        {help}
      </div>
    ) : null;
  }
  renderExtra() {
    const { extra } = this.props;
    return extra ? (
      <div className='dh-form-extra'>{extra}</div>
    ) : null;
  }
  getValidateStatus() {
    const { isFieldValidating, getFieldError, getFieldValue } = this.context.form;
    const fieldId = this.getId();
    if (!fieldId) {
      return '';
    }
    if (isFieldValidating(fieldId)) {
      return 'validating';
    }
    if (!!getFieldError(fieldId)) {
      return 'error';
    }
    const fieldValue = getFieldValue(fieldId);
    if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
      return 'success';
    }
    return '';
  }
  renderValidateWrapper(el1, el2, el3) {
    let classes = '';
    const form = this.context.form;
    const props = this.props;
    const validateStatus = (props.validateStatus === undefined && form) ?
      this.getValidateStatus() :
      props.validateStatus;
    if (validateStatus) {
      classes = classNames(
        {
          'has-feedback': props.hasFeedback,
          'has-success': validateStatus === 'success',
          'has-warning': validateStatus === 'warning',
          'has-error': validateStatus === 'error',
          'is-validating': validateStatus === 'validating',
        },
      );
    }
    return (
      <div 
        className={`dh-form-item-control ${classes}`}
      >
        {el1}{el2}{el3}
      </div>
    );
  }
  renderWrapper(children) {
    const wrapperCol = this.props.wrapperCol;
    return (
      <Col 
        className="dh-form-item-control-wrapper" 
        {...wrapperCol} 
        key="wrapper"
      >
        {children}
      </Col>
    );
  }
  isRequired() {
    const { required } = this.props;
    if (required !== undefined) {
      return required;
    }
    if (this.context.form) {
      const meta = this.getMeta() || {};
      const validate = (meta.validate || []);

      return validate.filter((item) => !!item.rules).some((item) => {
        return item.rules.some((rule) => rule.required);
      });
    }
    return false;
  }
  renderLabel() {
    const { label, labelCol, colon, id, width } = this.props;
    const context = this.context;
    const required = this.isRequired();

    let labelChildren = label;
    // Keep label is original where there should have no colon
    const haveColon = colon && !context.vertical;
    // Remove duplicated user input colon
    if (haveColon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[：|:]\s*$/, '');
    }
    return label ? (
      <Col 
        {...labelCol} 
        key="label"
        style={width ? {width} : {}}
        className="dh-form-item-label">
        <label 
          htmlFor={id || this.getId()}
          className={classNames({
           'dh-item-required': required,
          })}
          title={ typeof label === 'string' ? label : ''}
        >
          {labelChildren}
        </label>
      </Col>
    ) : null
  }
  renderChildren() {
    const props = this.props;
    // const children = React.Children.map(props.children, (child) => {
    //   if (child && typeof child.type === 'function' && !child.props.size) {
    //     return React.cloneElement(child, { size: 'large' });
    //   }
    //   return child;
    // });
    return [
      this.renderLabel(),
      this.renderWrapper(
        this.renderValidateWrapper(
          props.children,
          this.renderHelp(),
          this.renderExtra(),
        ),
      ),
    ];
  }
    /* 处理 自动验证*/ 
  render() {
    const { 
      children,
      className,
    } = this.props;
    return (
      <Row 
        className={classNames('dh-form-item', {[className]: className })} 
        type="flex"
        align="middle"
        justify="center"
      >
       { this.renderChildren() }
      </Row>
    )
  }
}
export default FormItem;
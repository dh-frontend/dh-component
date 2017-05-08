import React from 'react';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import classNames from 'classnames';
import Item from './item';
const FIELD_META_PROP = 'data-__meta';
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  static create() {

  }
  render() {
    const { layout } = this.props;
    return (
      <div className={classNames('dh-form', {
          [`dh-form-${layout}`]: layout
        }) 
      }>
        {
           this.props.children 
        }
      </div>
    )
  }
}
Form.create = function (options) {
      const formWrapper = createForm(Object.assign({
      fieldNameProp: 'id',
    }, options, {
      fieldMetaProp: FIELD_META_PROP
    }));
    return (Component) => formWrapper(React.createClass({
      propTypes: {
        form: PropTypes.object.isRequire,
      },
      childContextTypes: {
        form: PropTypes.object.isRequired,
      },
      getChildContext() {
        return {
          form: this.props.form,
        };
      },
      componentWillMount() {
        this.__getFieldProps = this.props.form.getFieldProps;
      },
      deprecatedGetFieldProps(name, option) {
        warning(
          false,
          '`getFieldProps` is not recommended, please use `getFieldDecorator` instead, ' +
          'see: http://u.ant.design/get-field-decorator',
        );
        return this.__getFieldProps(name, option);
      },
      render() {
        this.props.form.getFieldProps = this.deprecatedGetFieldProps;

        const withRef = {};
        if (options && options.withRef) {
          withRef.ref = 'formWrappedComponent';
        }
        return <Component {...this.props} {...withRef} />;
      },
    }))
};
Form.Item = Item;
export default Form;
## **Input** 组件的使用

```jsx
  import { Input } from 'dh-c';
  <Input placeholder="请输入正常文字"/>
  <Input.Number placeholder="请输入正常数字"/>
```
| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |-----
| width | 输入框宽度 | number或string | 无|
| placeholder | 提示信息 | string | 无 |
| name | 字段名字 | string | 无 |
| defaultValue | 默认值 | number | 无 |
| value | 输入框的值 | number或 string | 无 |
| addonBefore | 前置元素 | element | 无 |
| addonAfter | 后置元素 | element | 无 |
| searched | 搜索框 | bool | 无 |
| danger  | 危险输入框 | bool | 无 |
| onChange | 输入内容改变的回调function(current, e)|  function |无 |
| onBlur| 鼠标离开的回调function(current, e)|  function |无 |
## **InputNumber** 组件的使用

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |-----
| width | 输入框宽度 | number或string | 无
| placeholder | 提示信息 | string | 无
| name | 字段名字 | string | 无
| defaultValue | 默认值 | number | 无
| value | 输入框的值 | number或 string | 无
| min | 最小值 | number | 无
| step | 每次增加数量 | number 或 string | 1
| searched | 搜索框 | bool | 无
| danger  | 危险输入框 | bool | 无
| onChange | 输入内容改变的回调function(current, e)|  function |无

## Form表单组件


| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| form | 经 `Form.create()` 包装过的组件会自带 `this.props.form` 属性 | object | 无 |
| layout |['horizontal', 'vertical', 'inline'] | string|  horizontal|
| onSubmit | 数据验证成功后回调事件 | Function(e:Event) |  |

## Form.Item组件

  >注意：
  > * 一个 Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child，当有多个被装饰过的 child 时，`help` `required` `validateStatus` 无法自动生成。
  > * `2.2.0` 之前，只有当表单域为 Form.Item 的子元素时，才会自动生成 `help` `required` `validateStatus`，嵌套情况需要自行设置。

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|-----------|--------|
| label | label 标签的文本 | string或ReactNode |  |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | object | |
| width | lable提示文字的宽度，如果设置了width label的栅格布局将不起作用 | number或string | |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | object | |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string或ReactNode | |
|extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | string或ReactNode | |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean 或false |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string |  |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false  |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | true |

***关于create 方法使用****

```jsx
class CustomizedForm extends React.Component {}

CustomizedForm = Form.create({})(CustomizedForm);
```

`options` 的配置项如下。

| 参数      | 说明                                     | 类型       |
|-----------|------------------------------------------|------------|
| onFieldsChange | 当 `Form.Item` 子节点的值发生改变时触发，可以把对应的值转存到 Redux store | Function(props, fields) |
| mapPropsToFields | 把 props 转为对应的值，可用于把 Redux store 中的值读出 | Function(props): Object{ fieldName: Object{ value } } |
| onValuesChange | 任一表单域的值发生改变时的回调 | (props, values) => void |

> 经过 `Form.create` 包装的组件将会自带 `this.props.form` 属性，`this.props.form` 提供的 API 如下：

> 注意：使用 `getFieldsValue` `getFieldValue` `setFieldsValue` 等时，应确保对应的 field 已经用 `getFieldDecorator` 注册过了。

| 参数      | 说明                                     | 类型       |
|-----------|------------------------------------------|------------|
| getFieldsValue | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | Function([fieldNames: string[]]) |
| getFieldValue | 获取一个输入控件的值 | Function(fieldName: string) |
| setFieldsValue | 设置一组输入控件的值（注意：不要在 `componentWillReceiveProps` 内使用，否则会导致死循环，[更多](https://github.com/ant-design/ant-design/issues/2985)） | Function({ [fieldName]: value } |
| setFields | 设置一组输入控件的值与 Error。 [代码](https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79) | Function({ [fieldName]: { value: any, errors: [Error] } }) |
| validateFields | 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件 | Function([fieldNames: string[]], [options: object], callback: Function(errors, values)) |
| validateFieldsAndScroll | 与 `validateFields` 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围 | 参考 `validateFields` |
| getFieldError | 获取某个输入控件的 Error | Function(name) |
| getFieldsError | 获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error | Function([names: string[]]) |
| isFieldValidating | 判断一个输入控件是否在校验状态 | Function(name) |
| isFieldTouched | 判断一个输入控件是否经历过 `getFieldDecorator` 的值收集时机 `options.trigger` | (name: string) => boolean |
| isFieldsTouched | 判断是否任一输入控件经历过 `getFieldDecorator` 的值收集时机 `options.trigger` | (names?: string[]) => boolean |
| resetFields | 重置一组输入控件的值（为 `initialValue`）与状态，如不传入参数，则重置所有组件 | Function([names: string[]]) |
| getFieldDecorator | 用于和表单进行双向绑定，详见下方描述 | |

### 校验规则

参数  | 说明  | 类型 | 默认值
-----|------|------|------
message | 校验文案 | string | -
type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string'
required | 是否必选 | boolean | `false`
whitespace | 必选时，空格是否会被视为错误 | boolean | `false`
len | 字段长度 | number | -
min | 最小长度 | number | -
max | 最大长度 | number | -
enum | 枚举类型 | string | -
pattern | 正则表达式校验 | RegExp | -
transform | 校验前转换字段值 | function(value) => transformedValue:any | -
validator | 自定义校验（注意，[callback 必须被调用](https://github.com/ant-design/ant-design/issues/5155)） | function(rule, value, callback) | -

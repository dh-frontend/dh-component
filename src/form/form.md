## Input 组件的使用

```jsx
  import { Input } from 'dh-c';
  <Input placeholder="请输入正常文字"/>
  <Input.Number placeholder="请输入正常数字"/>
```
### Form

**更多示例参考 [rc-form](http://react-component.github.io/form/)**。

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| form | 经 `Form.create()` 包装过的组件会自带 `this.props.form` 属性，直接传给 Form 即可。1.7.0 之后无需设置 | object | 无 |
| layout | 表单布局(2.8 之后支持) | 'horizontal'\|'vertical'\|'inline' | 'horizontal' |
| horizontal | 水平排列布局(2.8 之后废弃) | boolean | true |
| vertical | 垂直排列布局(2.8 之后废弃) | boolean | false |
| inline | 行内排列布局(2.8 之后废弃) | boolean | false |
| onSubmit | 数据验证成功后回调事件 | Function(e:Event) |  |
| hideRequiredMark | 隐藏所有表单项的必选标记 | Boolean | false |

### 文字输入框

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |
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

### 数字输入框

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
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

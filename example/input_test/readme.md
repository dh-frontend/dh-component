## Input 组件的使用

```jsx
  import { Input } from 'dh-c';
  <Input placeholder="请输入正常文字"/>
  <Input.Number placeholder="请输入正常数字"/>
```

### 文字输入框

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| width | 输入框宽度 | number或string | 无
| placeholder | 提示信息 | string | 无
| name | 字段名字 | string | 无
| defaultValue | 默认值 | number | 无
| value | 输入框的值 | number或 string | 无
| addonBefore | 前置元素 | element | 无
| addonAfter | 后置元素 | element | 无
| searched | 搜索框 | bool | 无
| danger  | 危险输入框 | bool | 无
| onChange | 输入内容改变的回调function(current, e)|  function |无
| onBlur| 鼠标离开的回调function(current, e)|  function |无

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

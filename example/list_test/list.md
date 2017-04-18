## List 组件的使用

```jsx
  import { List } from 'dh-c';
  <List
    theme="nomarl"
    rowSelection={{
    type: 'dropdown',
    options: ['测试1', '测试2', '测试3'],
    onClick: (record) => { console.log("回调", record)}
  }}>
    <List.Item key="1">我是测试1</List.Item>
    <List.Item key="2">我是测试2</List.Item>
    <List.Item key="3">我是测试3</List.Item>
    <List.Item key="4">我是测试4</List.Item>
    <List.Item key="5">我是测试5</List.Item>
  </List>
```

### 文字输入框

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |
| header | 列表插入头部 | element | 无 |
| theme | 列表样式主题 | string | 无 （只接受 'radio', 'dropdown'）|
| name | 字段名字 | string | 无 |
| defaultValue | 默认值 | number | 无 |
| value | 输入框的值 | number或 string | 无 |
| addonBefore | 前置元素 | element | 无 |
| addonAfter | 后置元素 | element | 无 |
| searched | 搜索框 | bool | 无 |
| danger  | 危险输入框 | bool | 无 |
| onChange | 输入内容改变的回调function(current, e)|  function |无 |
| onBlur| 鼠标离开的回调function(current, e)|  function |无 |

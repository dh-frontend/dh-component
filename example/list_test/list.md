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

### List

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |
| header | 列表插入头部 | element | 无 |
| theme | 列表样式主题 | string | 无 （只接受 'radio', 'dropdown'）|
| multiple | 多选或者单选 | bool | 默认false 多选 |
| onChange | 列表改变时的回调 (checked, current, index) => {}| function | 无 |
| rowSelected | 整行选择是否触发 | bool | false |
| rowSelection | 后置元素配置 | object （详见例子配置）| 无 |

### Item

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |
| eventKey | 每一项的key必填项* | string | 无 |
| addonAvatar | 前置头像属性 | element | 无|

### rowSelection (字符串数组或者对象数组)

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |
| name |  下拉名称| string | 无 |
| key | 下拉key必须 | string | 无 |
| onClick |  点击回调({key, keyParent, keyPath, ...args}) => {} | function | 无 |

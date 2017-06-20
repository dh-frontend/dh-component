#### 使用方法

```javascript
  // common js
   const dhc = require('dh-c');
   const List = dhc.List;
  // es6
  import { List } from 'dh-c';

```
#### List 属性说明

| props 	| 说明 | 参数类型 | 默认值|
| ------	| ------ | ------ |----|
| defaultKeys | 默认选中的项 | string或者 array | 无 |
| selectedKeys | 选中的项 | string或者 array | 无 |
| mode | 列表选择模式，false无点选功能 | string | false（只接受 'only', 'multiple'）|
| multiple | 是否可以多重选择 | bool | 建议将此方法，替换成mode，可能被弃用 |
| immutable | 单选数据的不可变性，配合mode=only模式下使用 已经被弃用| bool | false |
| onChange | 列表改变时的回调 (record = array或string) => {}| function | 无 |
| animation | 过渡效果 | bool | true |
| className | 可添加样式类 | string | 无 |



### Item

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |----|
| key | 每一项的key必填项* | string | 无 |
| prefix | 前置元素或头像 | element | 无|
| icon | 选中时的图标，可自定义图标 | bool或者 string | false |
| suffix | 后置元素，若果设置了， 父元素的icon属性将被覆盖 | element | 无 |
| click | 父元素的icon属性设置时的回调  (key, selected) => {}| element | 无 |

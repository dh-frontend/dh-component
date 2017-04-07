## Radio 组件的使用

```jsx
  import { Radio } from 'dh-component';

  <Radio.Group>
    <Radio>单选框1</Radio>
    <Radio>单选框2</Radio>
    <Radio>单选框3</Radio>
  </Radio.Group>
```

### Radio.Group

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| defaultValue | 默认选中项(索引) | number | 0
| onChange | 选择时回调 | function(selected), selected为选中项索引 | 无

<br>

### Radio

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| defaultValue | 默认是否选中 | bool | false
| onChange | 选择时回调 | function(selected), selected为状态值,true/false | 无
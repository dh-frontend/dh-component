## Checkbox 组件的使用

```jsx
  import { Checkbox } from 'dh-component';

  <Checkbox.Group>
    <Checkbox>复选框1</Checkbox>
    <Checkbox>复选框2</Checkbox>
    <Checkbox>复选框3</Checkbox>
  </Checkbox.Group>
```

### Checkbox.Group

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| defaultValue | 默认选中项 | array | []
| onChange | 选择时回调 | function(selected), selected为选中项索引数组 | 无


### Checkbox

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| defaultValue | 默认是否选中 | bool | false
| onChange | 选择时回调 | function(selected), selected为状态值,true/false | 无

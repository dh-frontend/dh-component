## **Button** 组件的使用
```jsx
import { Butoon } from 'dh-c';
<Button type="default" />
```

| props | 说明 | 参数类型 | 默认值|
| ------| ------ | ------ |-----|
| type|设置按钮类型，可选值为, success, info, warning, danger|string| default|
|size|设置按钮的大小,可以选值为 small| string| defalut|
|shape|设置按钮为圆形，可选值为 circle |string| -|
|ghost|幽灵模式的按钮|bool|false|
|icon|为按钮添加icon图标|stirng|-|
|disable|设置按钮为不可点击状态|boolean| false|
|className|外加的样式类|string| -|
|onClick|点击按钮后的回调函数|function|-|

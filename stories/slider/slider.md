## **Slider** 滑动输入条使用
```jsx
import { Slider } from 'dh-c';
<Slider />
```
| props | 说明 | 参数类型 | 默认值|
|-------|-----|---------|------|
|overlay| 设置tooltip显示的内容| Element、String | value值|
|trigger | tooltip触发的事件|['click','hover']| 'hover'|
| min | 最小值 | number | 0|
| max | 最大值 | number | 100|
| reverse| 设置反方向滑动 |boolean| false|
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false|
| vertical |值为 true 时，Slider 为垂直方向 | boolean | false|
| value | 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number] | number、number[] | -|
| defaultValue | 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number] | number、number[] | 0 or [0, 0]|
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false|
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | Function(value) | -|

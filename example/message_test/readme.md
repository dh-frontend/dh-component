## message 组件使用

```jsx
  import { message } from './dh-component';
  message.success();
```

### API

  -  info(content,title,duration,onClose);
  -  message.success(content,title,duration,onClose);
  -  message.error(content,title,duration,onClose);
  -  message.warning(content,title,duration,onClose);
  -  message.clear();

| 参数 | 说明 | 类型 | 默认 |
|-------|------|-------------|---------|
| content | 提示内容 | string | - |
| title | 提示标题 | string | - |
| duration | 显示时间 | number | 2.0秒 |
| onClose | 关闭时回调函数 | function | - |

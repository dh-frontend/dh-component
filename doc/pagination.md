## Pagination 组件的使用

```jsx
  import { Pagination } from 'dh-component';

  <Pagination />
```

### Pagination

| props | 说明 | 参数类型 | 默认值
| ------| ------ | ------ |
| defaultCurrent | 默认页 | number | 1
| current | 当前页 | number | undefined
| total | 数据总量 | number | 0
| defaultPageSize | 默认每页数据量 | number | 10
| pageSize | 每页数据量 | number | 10
| onChange | 页码改变时回调 | function(current, pageSize) | 无

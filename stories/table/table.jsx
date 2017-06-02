import React from 'react';
import { Table,  Button, Icon } from '../../src';
class TableDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const dataSource = [
      {name: '小红', age: 18, sex: 0, height: 163, weight: 46},
      {name: '小黄', age: 19, sex: 1, height: 178, weight: 55},
      {name: '小蓝', age: 21, sex: 0, height: 177, weight: 52},
      {name: '小白', age: 17, sex: 1, height: 165, weight: 49},
      {name: '小黑', age: 20, sex: 1, height: 182, weight: 66},
      {name: '小粉', age: 20, sex: 0, height: 153, weight: 59},
      {name: '小绿', age: 19, sex: 1, height: 192, weight: 81}
    ];
    const columns = [
      {title: '姓名', dataIndex: 'name', frozen: true},
      {title: '年龄', dataIndex: 'age', sorter: true, ext:<Icon type="list-circle"/> },
      {title: '性别', dataIndex: 'sex', render: (text) => text == 1 ? '男' : '女'},
      {title: '身高', dataIndex: 'height'},
      {title: '体重', dataIndex: 'weight'}
    ];
    return (
      <div style={{height: 400}}>
        <Table
          dataSource={dataSource}
          columns={columns}
          fixed
          onChange={(pagination, filter, sorter) => console.log(pagination, filter, sorter)}
        />
      </div>
    )
  }
}
export default TableDemo;

import React from 'react';
import { Button, message } from '../../src';
class MessageDemo extends React.Component {
   constructor(props) {
       super(props)
   }
   render() {
       return (
        <div>
          <Button onClick={() => {message.success('成功')}}>sucess</Button>
        </div>
       )
   }
}
export default MessageDemo;
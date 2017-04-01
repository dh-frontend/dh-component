import React from 'react';
import Notification from 'rc-notification';
import classnames from 'classnames';
import Icon from '../icon';

let messageInstance;
let key = 1;
const defaultDuration = 2;//间隔时间(秒)
const defaultTop = '10%';
const prefixCls = 'dh-message';
const iconClass = 'duihao-circle1';//to-do 需要icon type

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
    prefixCls,
    transitionName: 'move-up',
    style: { top: defaultTop, left:'50%', position: 'absolute' }, // 覆盖原来的样式
  });
  return messageInstance;
}

function notice(content, title, duration, type, onClose) {
  const infoClass = ({
    info:'info',
    success:'warning',
    error:'error',
    warning:'warning',
  })[type];
  const instance  = getMessageInstance();
  instance.notice({
    content: (
      <div
        className={`${prefixCls}-container`}
      >
        <div className={`${prefixCls}-left ${prefixCls}-${type}`}>
          <Icon type={iconClass} />
          { title && <span>{title}</span> }
        </div>
        <div className={`${prefixCls}-right`}>
          {content}
        </div>
      </div>
    ),
    duration: duration || defaultDuration,
    onClose,
  });
  return (function () {
    const target = key;
    key += 1;
    return function () {
      instance.removeNotice(target);
    };
  }());
}

export default {
  info(content, title, duration, onClose) {
    return notice(content, title, duration, 'info', onClose);
  },
  success(content, title, duration, onClose) {
    return notice(content, title, duration, 'success', onClose);
  },
  error(content, title, duration, onClose) {
    return notice(content, title, duration, 'error', onClose);
  },
  warning(content, title, duration, onClose) {
    return notice(content, title, duration, 'warning', onClose);
  },
  clear() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
}

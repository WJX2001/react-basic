import React, { useState } from 'react';

// 在外层控制当前组件是否渲染，这种情况用于，权限隔离，懒加载，延时加载等场景

// TODO: 动态挂载组件

function RenderHOC(WrapComponent) {
  return function Index111(props) {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
      setVisible(!visible);
    };

    return (
      <div className="box">
        <button onClick={toggleVisible}>挂载组件</button>
        {visible ? (
          <WrapComponent {...props} setVisible={toggleVisible} />
        ) : (
          <div className="icon">11111</div>
        )}
      </div>
    );
  };
}

const Index = (props) => {
  const { setVisible } = props;

  return (
    <div className="box">
      <p>hello,my name is alien</p>
      <img src="https://pics0.baidu.com/feed/58ee3d6d55fbb2fb3b3446e4d05dd4a84723dcc9.jpeg@f_auto?token=0cf31e8f201d2a30fc42d1cd85b89c7c" />
      <button onClick={() => setVisible()}>卸载当前组件</button>
    </div>
  );
};

export default RenderHOC(Index);

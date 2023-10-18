import React, { useEffect, useState } from 'react';
import myImage from './img/4.jpg';
const renderQueue = [];
let isFirstRender = false;

const tryRender = () => {
  const render = renderQueue.shift();
  if (!render) return;
  setTimeout(() => {
    render();
  }, 1000);
};

// TODO: HOC
function renderHOC(WrapComponent) {
  return function NewIndex(props) {
    const [isRender, setRender] = useState(false);

    useEffect(() => {
      renderQueue.push(() => {
        // 放入待渲染队列中
        setRender(true);
      });

      if (!isFirstRender) {
        tryRender();
        isFirstRender = true;
      }
    }, []);
    return isRender ? (
      <WrapComponent tryRender={tryRender} {...props} />
    ) : (
      <div>还没出来呢，别着急</div>
    );
  };
}

// 业务组件
const Index = (props) => {
  useEffect(() => {
    const { name, tryRender } = props;
    tryRender();
    console.log(name + '渲染');
  }, []);

  return (
    <div>
      <img src={myImage} alt="" />
    </div>
  );
};

// TODO: 高阶组件包裹
const Item = renderHOC(Index);

const TryRender = () => {
  return (
    <React.Fragment>
      <Item name="组件一" />
      <Item name="组件二" />
      <Item name="组件三" />
    </React.Fragment>
  );
};

export default TryRender;

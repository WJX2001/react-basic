import React from 'react';

const Index = () => {
  return (
    <div>
      <ul>
        <li>react</li>
        <li>vue</li>
        <li>Angular</li>
      </ul>
    </div>
  );
};

const HOC = (Component) => {
  return () => {
    const element = Component();
    const otherProps = {
      name: 'wjx',
    };

    // 替换 Angular 元素节点
    const appendElement = React.createElement(
      'li',
      {},
      `hello,world,my name is ${otherProps.name}`,
    );

    const newChild = React.Children.map(
      element.props.children.props.children,
      (child, index) => {
        if (index === 2) return appendElement;
        return child;
      },
    );
    return React.cloneElement(element, element.props, newChild);
  };
};

export default HOC(Index);

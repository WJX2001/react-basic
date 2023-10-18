import React, { useEffect, useState } from 'react';

// TODO: 有状态组件(属性代理)
function ClassHOC(WrapComponent) {
  return class Idex extends React.Component {
    state = {
      name: 'alien',
    };
    componentDidMount() {
      console.log('HOC');
    }
    render() {
      return <WrapComponent {...this.props} {...this.state} />;
    }
  };
}

function Index(props) {
  const { name } = props;
  useEffect(() => {
    console.log('index');
  }, []);
  return <div>hello,world , my name is {name}</div>;
}

// TODO: 适用于无状态组件
function FunctionFunc(WrapComponent) {
  return function Index(props) {
    const [state, setState] = useState({ name: 'alien' });
    return <WrapComponent {...props} {...state} />;
  };
}

export default ClassHOC(Index);

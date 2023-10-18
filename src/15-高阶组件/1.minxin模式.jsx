import { Button } from 'antd';
import React from 'react';

class Base extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'alien',
    };
  }

  say() {
    console.log('base component');
  }

  render() {
    return (
      <div>
        hellow world
        <Button onClick={this.say.bind(this)}>点击</Button>
      </div>
    );
  }
}

class Index extends Base {
  componentDidMount() {
    console.log(this.state.name);
  }

  say() {
    // 会覆盖基类中的say
    console.log('extends components');
  }
}

export default Index;

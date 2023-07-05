import './app.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Item = () => {
}

function Groups (props){
  console.log( props.children  ) // Groups element
  React.Children.forEach(props.children,item=>{
      console.log( item.props )  //依次打印 props
  })
  return  props.children
}



const App = () => {
  return (
    <div>
      <Groups>
        <Item name="《React进阶实践指南》"></Item>
        <Item name="《Nodejs深度学习手册》"></Item>
      </Groups>
    </div>
  );
};

export default App;

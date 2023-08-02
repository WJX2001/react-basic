import React from 'react';
import './Juejin.css';
import { Col, Row } from 'antd';

export default function Juejin() {
  return (
    <div className="container">
      <div className="page_head">
        <a className="touxiang">
          <img
            src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~180x180.awebp"
            alt=""
            style={{ width: '72px', height: '72px', borderRadius: '50%' }}
          />
        </a>
        <div className="right">
          <div className="right-top">
            <span
              className="name"
              style={{
                maxWidth: '225px',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              用户王吉祥
            </span>
          </div>
          <div className='right-bottom'>
            <div>0 <span style={{color:"#8a919f"}}>粉丝</span></div>
            <div>1 <span style={{color:"#8a919f"}}>关注</span></div>
            <div>10 <span style={{color:"#8a919f"}}>掘力值</span></div>
            <div>在掘金创作的第177天</div>
          </div>
          <div className="right-bottom"></div>
        </div>
      </div>
      <div className="page_body">
        <Row gutter={[16,16]}>
              <Col span={8} style={{backgroundColor:"#8a919f"}}>111</Col>
              <Col span={8}>111</Col>
              <Col span={8}>111</Col>
        </Row>
      </div>
    </div>
  );
}

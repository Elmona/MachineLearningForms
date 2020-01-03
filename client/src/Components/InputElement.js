import React from 'react'

import {
  Input,
  Row,
  Col
} from 'antd'

const InputElement = ({ name, label }) =>
  <Row>
    <Col span={8}>
      <p css={{ textAlign: 'right', paddingRight: '12px' }}>
        {label}
      </p>
    </Col>
    <Col span={12}>
      <Input
        css={{ width: '100%' }}
        type='text'
        name={name}
      />
    </Col>
  </Row>

export default InputElement
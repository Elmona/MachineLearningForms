import React, { useState } from 'react'
import InputElement from './InputElement'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as css from '../App.css.js'

import {
  Button,
  Select,
  Row,
  Col
} from 'antd'


const { Option } = Select

const FormRecord = () => {
  return (
    <form css={css.form}>
      <p>Please fill in the form and submit.</p>
      <InputElement
        name='firstTeacher'
        label='Your first teachers name:'
      />
      <InputElement
        name='firstName'
        label='First name:'
      />
      <InputElement
        name='lastname'
        label='Last name:'
      />
      <InputElement
        name='email'
        label='E-mail adress:'
      />
      <Row gutter={2}>
        <Col push={1} span={8}>
          <p>Pick your favorite color:</p>
        </Col>
        <Col span={12}>
          <Select>
            <Option value="blue">Blue</Option>
            <Option value="red">Red</Option>
            <Option value="black">Black</Option>
            <Option value="white">White</Option>
            <Option value="green">Green</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={10} push={6}>
          <Button
            css={{ width: '100%', marginTop: '20px' }}
            type='primary'
            onClick={() => console.log('tjooo')}
          >
            Send
            </Button>
        </Col>
      </Row>
    </form>)
}

export default FormRecord
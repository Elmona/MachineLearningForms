/** @jsx jsx */
import { jsx } from '@emotion/core'
import './index.css'
import * as css from './App.css.js'
import 'antd/dist/antd.css'

import { Button, Input, Row, Col } from 'antd'
import Recorder from './lib/Recorder'

const InputElement = ({ name, label }) =>
  <Row>
    <Col span={8}>
      <p style={{ textAlign: 'right', paddingRight: '12px' }}>
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

const App = () => (
  <div css={css.Container}>
    <Recorder
      style={css.Wrapper}
    >
      <p>test</p>
      <form css={css.form}>
        <InputElement
          name='surename'
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
        <Row gutter={32}>
          <Col span={8} push={6}>
            <Button
              css={{ width: '100%', marginTop: '20px' }}
              type='primary'
              onClick={() => {
                fetch('/ping')
                  .then(res => res.json())
                  .then(res => console.log(res))
              }}

            >
              Send
            </Button>
          </Col>
        </Row>
      </form>
    </Recorder>
  </div>
)

export default App

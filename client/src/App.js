/** @jsx jsx */
import { jsx } from '@emotion/core'
import './index.css'
// import React, { useState } from 'react'
import * as css from './App.css.js'

import Recorder from './lib/Recorder'

const Input = ({ name, label }) =>
  <div css={{ display: 'flex', flex: '1', paddingBottom: '15px' }}>
    <label for={name} css={{ paddingRight: '20px' }}>{label}</label>
    <input type='text' name={name} />
  </div>

const App = () => (
  <div css={css.Container}>
    <Recorder
      style={css.Wrapper}
    >
      <p>test</p>
      <form css={css.form}>
        <Input
          name='surename'
          label='First name:'
        />
        <Input
          name='lastname'
          label='Last name:'
        />
        <Input
          name='email'
          label='E-mail adress:'
        />
        <input type='button' value='Send' />
      </form>
    </Recorder>
  </div>
)

export default App

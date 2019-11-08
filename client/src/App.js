/** @jsx jsx */
import { jsx } from '@emotion/core'
import './index.css'
import React from 'react'
import * as css from './App.css.js'

const App = () => {

  return (
    <div css={css.Container}>
      <div css={css.Wrapper}>
        <p>test</p>
        <form css={css.form}>
          <input type='text'></input>
          <input type='text'></input>
          <input type='text'></input>
          <input type='button' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default App

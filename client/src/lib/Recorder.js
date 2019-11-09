/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'

const Recorder = ({ style, ...props }) => {
  const [numberOfKeyDown, setNumberOfKeyDown] = useState(0)
  return (
    <>
      <div css={style}
        onKeyDown={e => setNumberOfKeyDown(previous => ++previous)}

      >
        {props.children}
      </div>
      <div>
        <p>NumberOfKeyDown: {numberOfKeyDown}</p>
      </div>
    </>
  )
}

export default Recorder
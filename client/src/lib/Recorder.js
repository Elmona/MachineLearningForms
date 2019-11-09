/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'

import distance from './mouseDistance'


const Recorder = ({ style, ...props }) => {

  const [numberOfKeyDown, setNumberOfKeyDown] = useState(0)
  const [numberOfBackspaces, setNumberOfBackspaces] = useState(0)
  const [numberOfTabs, setNumberOfTabs] = useState(0)

  const [distanceMouseTraveled, setDistanceMouseTraveled] = useState(0)
  const [numberOfMouseClicks, setNumberOfMouseClicks] = useState(0)

  return (
    <>
      <div css={style}
        onKeyDown={e => {
          if (e.key === 'Backspace') {
            setNumberOfBackspaces(previous => ++previous)
          } else if (e.key === 'Tab') {
            setNumberOfTabs(previous => ++previous)
          } else {
            setNumberOfKeyDown(previous => ++previous)
          }
        }}
        onMouseMove={e => setDistanceMouseTraveled(distance(e))}
        onMouseDown={e => setNumberOfMouseClicks(previous => ++previous)}
      >
        {props.children}
      </div>
      <div>
        <p>NumberOfKeyDown: {numberOfKeyDown}</p>
        <p>NumberOfTabs: {numberOfTabs}</p>
        <p>NumberOfBackspaces: {numberOfBackspaces}</p>
        <p>DistanceMouseTraveled: {distanceMouseTraveled}</p>
        <p>NumberOfMouseClicks: {numberOfMouseClicks}</p>
      </div>
    </>
  )
}

export default Recorder
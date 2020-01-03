/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import distance from './mouseDistance'
import { ping, SendData } from './Ajax'

const Recorder = ({ style, ...props }) => {

  return (
    <>
      <div css={style}
        onKeyDown={e => {
          if (e.key === 'Backspace') {
            props.setNumberOfBackspaces(previous => ++previous)
          } else if (e.key === 'Tab') {
            props.setNumberOfTabs(previous => ++previous)
          } else {
            props.setNumberOfKeyDown(previous => ++previous)
          }
        }}
        onMouseMove={e => props.setDistanceMouseTraveled(distance(e))}
        onMouseDown={e => props.setNumberOfMouseClicks(previous => ++previous)}
      >
        {props.children}
      </div>
      <div>
        <p>NumberOfKeyDown: {props.numberOfKeyDown}</p>
        <p>NumberOfTabs: {props.numberOfTabs}</p>
        <p>NumberOfBackspaces: {props.numberOfBackspaces}</p>
        <p>DistanceMouseTraveled: {props.distanceMouseTraveled}</p>
        <p>NumberOfMouseClicks: {props.numberOfMouseClicks}</p>
      </div>
    </>
  )
}

export default Recorder
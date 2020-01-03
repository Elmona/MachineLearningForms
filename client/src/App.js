/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import './index.css'
import * as css from './App.css.js'
import 'antd/dist/antd.css'
import Recorder from './lib/Recorder'
import FormRecord from './Components/FormRecord'

const App = () => {

  const [numberOfKeyDown, setNumberOfKeyDown] = useState(0)
  const [numberOfBackspaces, setNumberOfBackspaces] = useState(0)
  const [numberOfTabs, setNumberOfTabs] = useState(0)

  const [distanceMouseTraveled, setDistanceMouseTraveled] = useState(0)
  const [numberOfMouseClicks, setNumberOfMouseClicks] = useState(0)

  return (
    <div css={css.Container}>
      <Recorder
        numberOfKeyDown={numberOfKeyDown}
        setNumberOfKeyDown={setNumberOfKeyDown}

        numberOfBackspaces={numberOfBackspaces}
        setNumberOfBackspaces={setNumberOfBackspaces}

        numberOfTabs={numberOfTabs}
        setNumberOfTabs={setNumberOfTabs}

        distanceMouseTraveled={distanceMouseTraveled}
        setDistanceMouseTraveled={setDistanceMouseTraveled}

        numberOfMouseClicks={numberOfMouseClicks}
        setNumberOfMouseClicks={setNumberOfMouseClicks}

        style={css.Wrapper}
      >
        <FormRecord />
      </Recorder>
    </div>
  )
}

export default App

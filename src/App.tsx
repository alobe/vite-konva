import React, { useState } from 'react'
import {TopoCanvas} from './components/canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <TopoCanvas></TopoCanvas>
    </div>
  )
}

export default App

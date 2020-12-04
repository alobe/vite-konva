import React from 'react'
import { Stage, Layer, Rect, Text } from 'react-konva'
import K from 'konva'

export const TopoCanvas = () => {
  return <Stage width={500} height={600}>
    <Layer>
      <Text text="kdidkdk"></Text>
      <Rect x={20} y={20} width={50} height={50} fill={K.Util.getRandomColor()}></Rect>
    </Layer>
  </Stage>
}

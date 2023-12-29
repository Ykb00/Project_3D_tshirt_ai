import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'


import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
            '#FFFFFF', // White
            '#000000', // Black
            '#FF0000', // Red
            '#0000FF', // Blue
            '#008000', // Green
            '#FFFF00', // Yellow
            '#808080', // Gray
            '#FFA500', // Orange
            '#FFC0CB', // Pink
            '#800080', // Purple
]}
        onChange={(color)=> state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
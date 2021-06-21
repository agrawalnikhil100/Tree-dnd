import { CSSProperties, FC } from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
import {TreeBasicUncontrolledExample} from './TreeExample'
import * as React from 'react';

const rowStyle: CSSProperties = { overflow: 'hidden', clear: 'both' }

export const Container: FC = () => (
  <div>
    <div style={rowStyle}>
      <Dustbin />
      <Dustbin />
    </div>
    <div style={rowStyle}>
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="Paper" />
    </div>

    <TreeBasicUncontrolledExample />
  </div>
)

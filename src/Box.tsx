import { CSSProperties, FC } from 'react'
import { DragSourceMonitor, ConnectDragSource } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { DragSource, DragSourceConnector } from 'react-dnd'
import * as React from 'react';

const style: React.CSSProperties = {
  border: '1px dashed black',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export interface BoxProps {
  name: string

  // Collected Props
  isDragging: boolean
  connectDragSource: ConnectDragSource
}
const Box: React.FC<BoxProps> = ({ name, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <div
      ref={connectDragSource}
      style={{ ...style, opacity }}
    >
      {name}
    </div>
  )
}

export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: (props: BoxProps) => {
      return { name: props.name }
    },
    endDrag(props: BoxProps, monitor: DragSourceMonitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()

      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
  },
  (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }
  },
)(Box)

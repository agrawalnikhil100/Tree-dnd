import * as React from 'react';
import { ITreeProps, ITreeItem } from '@business-app/fabric/lib/components/Tree/Tree.types';
import { DragSourceMonitor, ConnectDragSource } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { DragSource, DragSourceConnector } from 'react-dnd';

const style: React.CSSProperties = {
    border: '1px dashed black',
    backgroundColor: 'white',
    cursor: 'move',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8
}
export interface RenderTreeNodeProps{
    item: ITreeItem;

    // Collected Props
    isDragging: boolean
    connectDragSource: ConnectDragSource
}

const RenderTreeNode: React.FC<RenderTreeNodeProps> = (props) =>{
    const opacity = props.isDragging ? 0.4 : 1
    return( 
    <div ref={props.connectDragSource} style={{ ...style, opacity }}>
        {React.Children.only(props.children)}
    </div>)
}


export default DragSource(
    ItemTypes.BOX,
    {
      beginDrag: (props: RenderTreeNodeProps) => {
        return { name: props.item.label }
      },
      endDrag(props: RenderTreeNodeProps, monitor: DragSourceMonitor) {
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
)(RenderTreeNode);



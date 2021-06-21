import * as React from 'react';
import { ConnectDropTarget, DropTargetMonitor } from 'react-dnd'
import { DropTarget, DropTargetConnector } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { ITreeProps, ITreeItem } from '@business-app/fabric/lib/components/Tree/Tree.types';
import  RenderTreeNode  from './RenderTreeNode';


export interface DropTreeNodeProp {
  canDrop: boolean
  isOver: boolean
  connectDropTarget: ConnectDropTarget
  item: ITreeItem;
}

const DropTreeNode: React.FC<DropTreeNodeProp> = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div
      ref={connectDropTarget}
      style={{ backgroundColor }}
      role="Dustbin"
    >

    </div>
  )
}

export default DropTarget(
  ItemTypes.BOX,
  {
    drop: () => ({ name: 'Dustbin' }),
  },
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(DropTreeNode)

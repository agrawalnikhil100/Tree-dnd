import { ITreeStyles, Tree } from '@business-app/fabric/lib/components/Tree';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import * as React from 'react';
import { ITreeItem } from '@business-app/fabric/lib/components/Tree/Tree.types';
import { getFolderKeys } from '@business-app/fabric/lib/components/Tree/examples/Tree.Example.Data';
import  RenderTreeNode  from './RenderTreeNode';
import DropTreeNode from './DropTreeNode';


export class TreeBasicUncontrolledExample extends React.Component {

  private _onRenderItemContainer = (
    item: ITreeItem,
    isSelected: boolean,
    isNodeExpanded: boolean,
    index: number,
    defaultRenderer: () => JSX.Element
  ) => {
    return (

      <RenderTreeNode
        item={item}
      >

        {defaultRenderer()}

     </RenderTreeNode>

    )
  };
  
  
  public render(): JSX.Element {
    const items: ITreeItem[] = produceItems;
    const folderKeysSet = getFolderKeys(items);

    return (
      <div className={exampleStyles.exampleContainer}>
        <Tree
          componentRef ={()=>{}}
          items={items}
          initialExpandedItemKeys={folderKeysSet}
          strings={{
            listAriaLabel: 'list',
            moreCommandsAriaLabel: 'more commands'
          }}
          onRenderItemContainer = {this._onRenderItemContainer}
        />
      </div>
    );
  }
}
  
const exampleStyles = mergeStyleSets({
  exampleContainer: {
    // 'display: flex' is important for the Tree to layout correctly.
    display: 'flex',
    // Just an example to prove that row direction also works for the Tree.
    flexDirection: 'row',
    width: 320,
    height: 400,
    userSelect: 'none'
  }
});

export var produceItems: ITreeItem[] = [
  {
      label: 'Fruits',
      key: 'fruits',
      isFolder: true,
      level: 0,
      setSize: 2,
      indexInParent: 0
  },
  {
      label: 'Apples',
      key: 'apples',
      isFolder: true,
      level: 1,
      setSize: 0,
      indexInParent: 0   
  },
  {
      label: 'Granny Smith',
      key: 'granny smith',
      level: 2,
      setSize: 2,
      indexInParent: 0
  },
  {
      label: 'Red Delicious',
      key: 'red delicious',
      level: 2,
      setSize: 2,
      indexInParent: 1
  },
  {
      label: 'Vegetables',
      key: 'vegetables',
      isFolder: true,
      level: 0,
      setSize: 2,
      indexInParent: 1
  },
  {
      label: 'Carrots',
      key: 'carrots',
      level: 1,
      setSize: 3,
      indexInParent: 0
  },
  {
      label: 'Cucumbers',
      key: 'cucumbers',
      level: 1,
      setSize: 3,
      indexInParent: 1
  },
  {
      label: 'Lettuce',
      key: 'lettuce',
      level: 1,
      setSize: 3,
      indexInParent: 2
  }
];
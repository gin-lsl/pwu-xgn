import { Component, OnInit } from '@angular/core';
import { TreeView } from './model';

@Component({
  selector: 'GuTreeView',
  templateUrl: './tree-view.html',
  styleUrls: ['./tree-view.less']
})
export class TreeViewComponent implements OnInit {

  tree: TreeView;

  constructor() { }

  ngOnInit(): void {
    let tree = new TreeView();
    tree = {
      id: '001',
      title: '测试---001',
      children: [
        {
          id: '00101',
          title: '测试---00101'
        },
        {
          id: '00102',
          title: '测试---00102',
          children: [
            {
              id: '0010201',
              title: '测试---0010201'
            }
          ]
        },
        {
          id: '00103',
          title: '测试---00103',
          children: [
            {
              id: '0010301',
              title: '测试---0010301'
            },
            {
              id: '0010302',
              title: '测试---0010302'
            }
          ]
        }
      ]
    } as any;
    this.tree = tree;
  }

  onClick(node, isLeaf: boolean) {
    console.log('You Click Node: ', node, ', isLeaf: ' + isLeaf);
  }
}

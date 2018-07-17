import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TreeViewNode } from '../model';
import { GuTreeViewService } from '../services/tree-view.service';

@Component({
  selector: 'GuTreeViewNode',
  templateUrl: './tree-view-node.html',
  styleUrls: ['./tree-view-node.less'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewNodeComponent implements OnInit {

  @Input()
  GuTreeViewNode: any;

  @Input()
  GuIndent: number = 0;

  @Output()
  GuClickBranch: EventEmitter<any> = new EventEmitter();

  @Output()
  GuClickLeaf: EventEmitter<any> = new EventEmitter();

  @Output()
  GuSelectChange: EventEmitter<any> = new EventEmitter();

  constructor(private guTreeViewService: GuTreeViewService) { }

  ngOnInit(): void { }

  toggleExpand(node: any, event?: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    node.isExpand = !node.isExpand;
  }

  _onClickBranch(node) {
    this.GuClickBranch.emit({
      node: node,
      indent: this.GuIndent,
    });
    node.isSelect = !node.isSelect;
    this.guTreeViewService.changeCurrentSelectNode(node);
    this.GuSelectChange.emit({
      node: node,
      indent: this.GuIndent,
      isLeaf: false,
    });
  }

  _onClickLeaf(node) {
    this.GuClickLeaf.emit({
      node: node,
      indent: this.GuIndent,
    });
    node.isSelect = !node.isSelect;
    this.guTreeViewService.changeCurrentSelectNode(node);
    this.GuSelectChange.emit({
      node: node,
      indent: this.GuIndent,
      isLeaf: true,
    });
  }
}

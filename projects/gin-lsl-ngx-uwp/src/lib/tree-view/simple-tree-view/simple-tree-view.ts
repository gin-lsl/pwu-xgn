import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TreeView } from '../model';

@Component({
  selector: 'GuSimpleTreeView',
  templateUrl: './simple-tree-view.html',
  styleUrls: ['./simple-tree-view.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTreeViewComponent implements OnInit {

  @Input()
  GuTree: any;

  @Output()
  GuClickBranch: EventEmitter<any> = new EventEmitter();

  @Output()
  GuClickLeaf: EventEmitter<any> = new EventEmitter();

  @Output()
  GuSelectChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}

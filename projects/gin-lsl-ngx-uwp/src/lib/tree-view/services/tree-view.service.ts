import { Injectable } from '@angular/core';

@Injectable()
export class GuTreeViewService {

  currentSelectedNode: any;

  changeCurrentSelectNode(newNode) {

    if (this.currentSelectedNode === newNode) {
      return;
    }

    if (this.currentSelectedNode) {
      this.currentSelectedNode.isSelect = false;
    }
    this.currentSelectedNode = newNode;
  }
}

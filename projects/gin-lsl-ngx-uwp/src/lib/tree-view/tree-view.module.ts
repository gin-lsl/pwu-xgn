import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view';
import { TreeViewNodeComponent } from './tree-view-node/tree-view-node';
import { SimpleTreeViewComponent } from './simple-tree-view/simple-tree-view';
import { GuTreeViewService } from './services/tree-view.service';

@NgModule({
  declarations: [
    TreeViewComponent,
    TreeViewNodeComponent,
    SimpleTreeViewComponent,
  ],
  imports: [CommonModule],
  exports: [
    TreeViewComponent,
    TreeViewNodeComponent,
    SimpleTreeViewComponent,
  ],
  providers: [
    GuTreeViewService,
  ],
})
export class GuTreeViewModule { }

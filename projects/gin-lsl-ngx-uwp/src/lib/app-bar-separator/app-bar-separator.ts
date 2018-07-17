import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[GuAppBarSeparator]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./app-bar-separator.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'Gu GuAppBarSeparator',
    role: 'separator'
  }
})
export class GuAppBarSeparatorComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

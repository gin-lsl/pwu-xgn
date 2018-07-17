import { Component, OnInit, ElementRef, Renderer2, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[GuAppBarButton], GuAppBarButton',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./app-bar-button.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'Gu GuAppBarButton',
    role: 'button',
  }
})
export class GuAppBarButtonComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }
}

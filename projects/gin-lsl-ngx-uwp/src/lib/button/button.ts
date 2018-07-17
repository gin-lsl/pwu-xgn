import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,
  HostListener, ElementRef, Renderer2, HostBinding
} from '@angular/core';

@Component({
  selector: '[GuButton]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./button.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'Gu GuButton GuBorder--hover',
    role: 'button',
  }
})
export class GuButtonComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void { }

}

import {
  Directive, ElementRef, OnInit, Renderer2,
  ChangeDetectionStrategy, ViewEncapsulation, Component, Input, ContentChild
} from '@angular/core';

@Component({
  selector: 'input[GuInput]',
  template: '',
  // template: `
  //   <span>
  //     <span class="Gu GuInput__clear"
  //       [class.GuInput__clear--press]="_isPress"
  //       role="button"
  //       (mouseup)="_isPress = false"
  //       (mousedown)="_isPress = true"
  //       (click)="inputContent.focus()"></span>
  //   </span>
  // `,
  styleUrls: [`./input.less`],
  host: {
    class: 'Gu GuInput'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GuInputComponent implements OnInit {

  _isPress: boolean = false;
  _isReadonly: boolean = false;

  private _el: HTMLInputElement;

  @ContentChild('input')
  public inputContent: any;

  private _isFirstSetValue: boolean;
  @Input()
  set isReadonly(value: boolean) {
    this._isReadonly = value;
    this._isFirstSetValue = true;
  }
  get isReadonly() {
    return this._isReadonly;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this._el = this.elementRef.nativeElement;
  }

  focus() {
    this._el.focus();
  }
}


// @Directive({
//   selector: 'input[GuInput]',
//   host: {
//     'class': 'Gu GuInput'
//   },
// })
// export class GuInputDirective implements OnInit {

//   private _el: HTMLInputElement;

//   constructor(
//     private _elementRef: ElementRef,
//     private renderer: Renderer2,
//   ) {
//     this._el = _elementRef.nativeElement;
//   }

//   ngOnInit() {
//     const span = this.renderer.createElement('span');
//     this.renderer.addClass(span, 'GuInput__clear');
//     this.renderer.setAttribute(span, 'role', 'button');
//     this.renderer.listen(span, 'click', () => {
//       this._el.focus();
//     });
//     this.renderer.appendChild(span, this.renderer.createText('test'));
//     this.renderer.insertBefore(
//       this.renderer.parentNode(this._el),
//       span,
//       this.renderer.nextSibling(this._el),
//     );
//   }

//   public focus() {
//     (this._el as HTMLInputElement).focus();
//   }

// }

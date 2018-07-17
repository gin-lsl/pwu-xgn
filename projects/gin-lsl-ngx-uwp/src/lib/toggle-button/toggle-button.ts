import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewEncapsulation, HostListener, HostBinding, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'button[GuToggleButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./toggle-button.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'Gu GuToggleButton',
    role: 'checkbox'
  }
})
export class GuToggleButtonComponent implements OnInit {

  /**
   * 是否选中
   */
  @Input()
  @HostBinding('class.GuToggleButton--checked')
  public GuIsChecked: boolean;

  /**
   * 是否是禁用状态
   */
  @Input()
  @HostBinding('class.GuToggleButton--disabled')
  public GuIsDisabled: boolean;

  @HostBinding('class.GuBorder--hover')
  get __isHover() {
    return !this.GuIsDisabled;
  }

  @Output()
  public GuIsCheckedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  @HostListener('click')
  public onClick() {
    if (this.GuIsDisabled) {
      return;
    }
    this.GuIsChecked = !this.GuIsChecked;
    this.GuIsCheckedChange.emit(this.GuIsChecked);
  }

  public toggleIsChecked() {
    this.GuIsChecked = !this.GuIsChecked;
    this.GuIsCheckedChange.emit(this.GuIsChecked);
  }

  public setIsChecked(newValue: boolean = false) {
    this.GuIsChecked = newValue;
    this.GuIsCheckedChange.emit(newValue);
  }
}

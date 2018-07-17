import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'button[GuAppBarToggleButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./app-bar-toggle-button.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'Gu GuAppBarToggleButton',
    role: 'checkbox',
  }
})
export class GuAppBarToggleButtonComponent implements OnInit {
  constructor() { }

  /**
   * 是否选中
   */
  @Input()
  public GuIsChecked: boolean;

  @Output()
  public GuIsCheckedChange: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void { }

  @HostBinding('class.GuAppBarToggleButton--checked')
  get IsChecked() {
    return this.GuIsChecked;
  }

  @HostListener('click')
  public onClick() {
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

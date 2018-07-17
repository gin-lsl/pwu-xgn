import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewEncapsulation, Input, TemplateRef,
  Output, EventEmitter, HostListener
} from '@angular/core';

@Component({
  selector: 'GuToggleSwitch',
  templateUrl: './toggle-switch.html',
  styleUrls: ['./toggle-switch.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GuToggleSwitchComponent implements OnInit {

  checked: boolean;
  isCheckedContentString: boolean;
  isUnCheckedContentString: boolean;
  private _checkedContent: string | TemplateRef<void>;
  private _unCheckedContent: string | TemplateRef<void>;

  @Input()
  GuDisabled: boolean;

  @Input()
  set GuChecked(value: boolean) {
    this.checked = value;
    this.GuCheckedChange.emit(value);
  }
  get GuChecked() {
    return this.checked;
  }

  /**
   * 选中时选中的内容
   */
  @Input()
  set GuCheckedContent(value: string | TemplateRef<void>) {
    this.isCheckedContentString = !(value instanceof TemplateRef);
    this._checkedContent = value;
  }
  get GuCheckedContent(): string | TemplateRef<void> {
    return this._checkedContent;
  }

  /**
   * 为选中时显示的内容
   */
  @Input()
  set GuUnCheckedContent(value: string | TemplateRef<void>) {
    console.log('GuUnCheckedContent:', value);
    this.isUnCheckedContentString = !(value instanceof TemplateRef);
    this._unCheckedContent = value;
  }
  get GuUnCheckedContent(): string | TemplateRef<void> {
    return this._unCheckedContent;
  }

  @Output()
  public GuCheckedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  @HostListener('click')
  onClick() {
    this.GuChecked = !this.GuChecked;
  }

  public toggleChecked() {
    this.GuChecked = !this.GuChecked;
  }

}

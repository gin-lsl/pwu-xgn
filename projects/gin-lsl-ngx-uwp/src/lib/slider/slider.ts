import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, HostListener, ElementRef } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

export const GU_SLIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GuSliderComponent),
  multi: true
};

@Component({
  selector: 'GuSlider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.less'],
  providers: [GU_SLIDER_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'Gu GuSlider',
  }
})
export class GuSliderComponent implements OnInit, ControlValueAccessor {

  private _value: number = 0;
  private _step: number = 1;
  private _min: number = 0;
  private _max: number = 100;
  private _disabled: boolean = false;
  private _max_precent = this.max / 100;

  _displayValue = 0;

  set value(value: any) {
    this._value = value;
    this._displayValue = value / this._max_precent;
    this.notifyValueChange();
  }
  get value() { return this._value; }

  @Input('GuStep')
  get step() { return this._step; }
  set step(step) { this._step = coerceNumberProperty(step); }

  @Input('GuMin')
  set min(min) { this._min = coerceNumberProperty(min); }
  get min() { return this._min; }

  @Input('GuMax')
  get max() { return this._max; }
  set max(max) {
    this._max = coerceNumberProperty(max);
    this._max_precent = this._max / 100;
  }

  @Input('GuDisabled')
  get disabled() { return this._disabled; }
  set disabled(disabled) { this._disabled = coerceBooleanProperty(disabled); }

  onChange: (value) => {};
  onTouched: () => {};

  constructor(
    private elementRef: ElementRef<HTMLUnknownElement>,
  ) { }

  notifyValueChange() {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  ngOnInit() {
  }

  writeValue(value: any): void {
    this.value = coerceNumberProperty(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  @HostListener('click', ['$event'])
  _onClick(event: MouseEvent) {

    if (this.disabled) {
      return;
    }
    const ref_padding_left = 8;
    const min_point = 0;
    const max_point = 284;
    const scale = max_point / this.max;
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const client_x = event.clientX;
    const rect_left = rect.left;
    let point_x = client_x - rect_left - ref_padding_left;
    if (point_x < min_point) {
      point_x = min_point;
    } else if (point_x > max_point) {
      point_x = max_point;
    }
    point_x = point_x / scale;
    this.value = point_x;
  }
}

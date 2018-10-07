import {
  Component, OnInit, ViewEncapsulation,
  Input, Output, EventEmitter, TemplateRef
} from '@angular/core';

@Component({
  selector: 'GuListBox',
  templateUrl: './list-box.html',
  styleUrls: ['./list-box.less'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'Gu GuListBox',
  }
})
export class GuListBoxComponent implements OnInit {

  @Input() GuItemSource: Array<any>;

  @Input() GuHeight: number = 40;

  @Input() GuWidth: number;

  @Input() GuDisplayMemberPath: string;

  @Input() GuSelectedValuePath: string;

  @Input() GuSelection: any;

  @Input() GuDisplayMemberTemplate: TemplateRef<any>;

  /**
   * 阻止 GuSelectionChange 事件
   */
  @Input() GuPreventSelectionChangeEvent: boolean;

  /**
   * 选择
   */
  @Output() GuSelect: EventEmitter<any> = new EventEmitter();

  /**
   * 选中值改变
   */
  @Output() GuSelectionChange: EventEmitter<any> = new EventEmitter();

  _selectIndex: number;

  constructor() { }

  ngOnInit(): void { }

  onSelect(item: any, index: number) {

    this.GuSelect.emit(this.GuSelectedValuePath ? item[this.GuSelectedValuePath] : item);
    if (!this.GuPreventSelectionChangeEvent) {
      this._selectIndex = index;
      this.GuSelectionChange.emit(this.GuSelectedValuePath ? item[this.GuSelectedValuePath] : item);
    }
  }
}

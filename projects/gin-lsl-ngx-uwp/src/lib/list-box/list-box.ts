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

  @Input() GuDisplayMemberTemplate: TemplateRef<any>;

  @Output() GuSelectionChanged: EventEmitter<any> = new EventEmitter();

  _selectIndex: number;

  constructor() { }

  ngOnInit(): void { }

  onSelect(item: any, index: number) {
    this._selectIndex = index;
    this.GuSelectionChanged.emit(this.GuSelectedValuePath ? item[this.GuSelectedValuePath] : item);
  }
}

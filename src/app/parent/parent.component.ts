import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gu-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  public name: '测试';

  constructor() { }

  ngOnInit() {
  }

}

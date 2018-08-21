import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'GuToolTipContent',
  template: `
    <div class="Gu GuToolTipContent"
        [style.visibility]="_visibility"
        [style.display]="_visibility === 'visible' ? 'block' : 'none'">{{ content }}</div>
  `,
  styles: [
    `.Gu.GuToolTipContent {
      border: 1px solid #CCCCCC;
      background-color: #F2F2F2;
      padding: 6px;
      box-sizing: border-box;
      font-size: 13px;
      font-family: 'Microsoft Yahei UI', sans-serif;
    }`
  ],
})
export class GuToolTipComponent implements OnInit, AfterViewInit {

  content: string;

  _visibility: string = 'initial';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

  show() {

    this._visibility = 'visible';
  }

  hide() {

    this._visibility = 'hidden';
  }

  isVisible() {

    return this._visibility === 'visible';
  }

}

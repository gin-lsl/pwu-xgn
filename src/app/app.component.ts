import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { TreeView } from 'projects/gin-lsl-ngx-uwp/src/public_api';

@Component({
  selector: 'gu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'gu';

  count = 0;

  appbartogglebuttonChecked = false;

  disabled = false;

  checkbox = false;

  tree: any;

  languages: Array<any>;

  frameworks: Array<any>;

  ngOnInit() {
    let tree = new TreeView();
    tree = {
      id: '001',
      title: '测试---001',
      children: [
        {
          id: '00101',
          title: '测试---00101'
        },
        {
          id: '00102',
          title: '测试---00102',
          children: [
            {
              id: '0010201',
              title: '测试---0010201'
            }
          ]
        },
        {
          id: '00103',
          title: '测试---00103',
          children: [
            {
              id: '0010301',
              title: '测试---0010301'
            },
            {
              id: '0010302',
              title: '测试---0010302'
            }
          ]
        }
      ]
    } as any;
    this.tree = tree;

    this.languages = ['Java', 'JavaScript', 'C#', 'PHP'];

    this.frameworks = [
      { name: 'Angular', 'type': 'front' },
      { name: 'Koa', type: 'back' },
      { name: 'React', type: 'front' },
      { name: 'Spring', type: 'back' }
    ];
  }

  focus(guInputRef) {
    guInputRef.focus();
  }

  add() {
    this.count++;
  }

  toggle_Appbartogglebutton() {
    this.appbartogglebuttonChecked = !this.appbartogglebuttonChecked;
  }

  ontoggle_Appbartogglebutton($event) {
    console.log('newValue: ', $event);
  }

  onTreeViewSelectChange(event) {
    console.log('onTreeViewSelectChange: ', event);
  }

}

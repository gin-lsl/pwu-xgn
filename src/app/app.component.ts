import {
  Component, OnInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, Injector,
  Inject, ApplicationRef, TemplateRef, InjectionToken, inject, ViewChildren, QueryList, AfterViewInit,
} from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { TreeView } from 'projects/gin-lsl-ngx-uwp/src/public_api';
import { DomPortalOutlet, TemplatePortal, ComponentPortal, PortalInjector, CdkPortal, Portal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';

const INJECTION_KEY = new InjectionToken('DialogComponent Portal');

const API_TOKEN = new InjectionToken('API');

@Component({
  selector: 'gu-test-dialog1',
  template: `
    <p>Component Portal: {{ data }}</p>
  `,
  providers: [
    {
      useValue: 'test',
      provide: 'test'
    },
  ]
})
export class DialogComponent implements OnInit {

  /**
   * @internal
   */
  data: any;

  constructor(
    // @Inject(INJECTION_KEY) public data: any
    // private injector: Injector,
  ) {
  }

  ngOnInit(): void {

    // console.log('this.injector.get(INJECTION_KEY): ', this.injector.get(INJECTION_KEY));

    // console.log('test: ', this.injector.get('test'));

    // console.log('___fun: ', this.injector.get('___fun'));

    // this.data = this.injector.get(INJECTION_KEY);
  }
}

function createInstance<Type>(ctor) {


}

@Component({
  selector: 'gu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'gu';

  count = 0;

  appbartogglebuttonChecked = false;

  disabled = false;

  checkbox = false;

  tree: any;

  languages: Array<any>;

  frameworks: Array<any>;

  selectedCdkPortalIndex: number;

  @ViewChildren(CdkPortal) cdkPortals: QueryList<Portal<any>>;

  cdkPortalArray: any[];

  cdkComponentPortal: any;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const dialogComponentRef = this.viewContainerRef.createComponent(componentFactory, 0);
    this.viewContainerRef.createComponent(componentFactory, 1);
    dialogComponentRef.instance.data = 'DialogComponent data 属性值';
    console.log('hostview: ', dialogComponentRef.hostView);
    console.log('viewContainerRef: ', this.viewContainerRef);

    this.cdkComponentPortal = new ComponentPortal(DialogComponent);

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

  ngAfterViewInit() {

    setTimeout(() => {
      if (this.cdkPortals && this.cdkPortals.length) {
        this.cdkPortalArray = this.cdkPortals.toArray();
      }
    });
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

  // tslint:disable-next-line:member-ordering
  @ViewChild('_portal1', { read: ViewContainerRef }) _portal1: ViewContainerRef;

  // tslint:disable-next-line:member-ordering
  @ViewChild('_portalTpl1', { read: TemplateRef }) _portalTpl1;

  // tslint:disable-next-line:member-ordering
  private _appRef: ApplicationRef;

  onDoPortal() {

    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    // 构造
    // DomPortalOutlet

    const portalOutlet = new DomPortalOutlet(
      this._portal1.element.nativeElement,
      this._componentFactoryResolver,
      this._appRef,
      this._injector);

    // ComponentPortal | TemplatePortal 包装组件或模板

    const tplPortal = new TemplatePortal(this._portalTpl1, this._portal1, { name: '测试' });

    // 调用 PortalOutlet 的 attact 挂载 Portal

    portalOutlet.attach(tplPortal);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('_portal2', { read: ViewContainerRef }) _portal2: ViewContainerRef;
  onDoComponentPortal() {

    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    let container = (<Document>this._document).createElement('div');
    container.classList.add('gu-template-portal');
    container = (<Document>this._document).body.appendChild(container);

    const map = new WeakMap();
    map.set(INJECTION_KEY, '测试' + Date.now());
    const injector = new PortalInjector(this._injector, map);

    const portalOutlet = new DomPortalOutlet(
      // this._portal2.element.nativeElement,
      container,
      this._componentFactoryResolver,
      this._appRef,
      // this._injector
      injector,
    );

    const ctor = DialogComponent;

    const componentPortal = new ComponentPortal(DialogComponent);

    portalOutlet.attach(componentPortal);
  }

  openOverlay() {

    const positionStrategy = this.overlay
      .position()
      .global()
      .width('500px')
      .height('300px')
      .centerHorizontally()
      .centerVertically();

    // this.overlay.position().global()

    console.log('app ViewContainerRef: ', this.viewContainerRef);

    const overlayRef = this.overlay.create({
      height: 300,
      width: 500,
      positionStrategy: positionStrategy,
      // positionStrategy: this.overlay.position().global()
      //   .centerHorizontally()
      //   .centerVertically()
      //   .top('0px').left('0px')
    });

    const overlayContentComponet = new ComponentPortal(DialogComponent);

    const tplCon = new TemplatePortal(this._portalTpl1, this.viewContainerRef);

    // overlayRef.attach(overlayContentComponet);
    overlayRef.attach(tplCon);
  }

}

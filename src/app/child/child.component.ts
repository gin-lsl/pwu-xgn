import { Component, OnInit, Inject, Renderer2, ElementRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'gu-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  constructor(
    @Inject(ParentComponent)
    private parent: ParentComponent,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  onClick() {
    console.log('parent name: ', this.parent);
    this.renderer.appendChild(this.elementRef.nativeElement, this.parent);
  }

}

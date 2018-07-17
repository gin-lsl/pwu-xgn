import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinLslNgxUwpComponent } from './gin-lsl-ngx-uwp.component';

describe('GinLslNgxUwpComponent', () => {
  let component: GinLslNgxUwpComponent;
  let fixture: ComponentFixture<GinLslNgxUwpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinLslNgxUwpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinLslNgxUwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

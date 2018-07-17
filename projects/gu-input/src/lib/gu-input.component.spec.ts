import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuInputComponent } from './gu-input.component';

describe('GuInputComponent', () => {
  let component: GuInputComponent;
  let fixture: ComponentFixture<GuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

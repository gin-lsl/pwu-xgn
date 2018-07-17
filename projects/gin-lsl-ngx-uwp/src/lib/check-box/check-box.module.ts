import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CheckBoxComponent,
  ],
  exports: [
    CheckBoxComponent,
  ]
})
export class GuCheckBoxModule { }

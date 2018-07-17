import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuButtonComponent } from './button';

@NgModule({
  declarations: [
    GuButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    GuButtonComponent,
  ],
  providers: [],
})
export class GuButtonModule { }

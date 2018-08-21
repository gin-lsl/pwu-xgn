import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { GuToolTipComponent } from './tool-tip.component';
import { GuToolTipDirective } from './tool-tip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [GuToolTipComponent, GuToolTipDirective],
  imports: [CommonModule, OverlayModule, BrowserAnimationsModule],
  exports: [GuToolTipComponent, GuToolTipDirective],
  entryComponents: [GuToolTipComponent],
  providers: [],
})
export class GuToolTipModule { }

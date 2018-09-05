import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuAppBarButtonModule } from './app-bar-button/app-bar-button.module';
import { GuAppBarSeparatorModule } from './app-bar-separator/app-bar-separator.module';
import { GuAppBarToggleButtonModule } from './app-bar-toggle-button/app-bar-toggle-button.module';
import { GuButtonModule } from './button/button.module';
import { GuInputModule } from './input/input.module';
import { GuToggleButtonModule } from './toggle-button/toggle-button.module';
import { GuToggleSwitchModule } from './toggle-switch/toggle-switch.module';
import { GuCheckBoxModule } from './check-box/check-box.module';
import { GuTreeViewModule } from './tree-view/tree-view.module';
import { GuListBoxModule } from './list-box/list-box.module';
import { GuToolTipModule } from './tool-tip/tool-tip.module';
import { GuSliderModule } from './slider/slider.module';

const LIB_MODULES = [
  GuAppBarButtonModule,
  GuAppBarSeparatorModule,
  GuAppBarToggleButtonModule,
  GuButtonModule,
  GuInputModule,
  GuToggleButtonModule,
  GuToggleSwitchModule,
  GuCheckBoxModule,
  GuTreeViewModule,
  GuListBoxModule,
  GuToolTipModule,
  GuSliderModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...LIB_MODULES,
  ],
  exports: [
    CommonModule,
    ...LIB_MODULES,
  ],
  providers: [],
})
export class GuNgxUwpModule { }

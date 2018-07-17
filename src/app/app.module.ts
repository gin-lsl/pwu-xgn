import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { GuButtonModule } from 'projects/gin-lsl-ngx-uwp/src/lib/button/button.module';
// import { GuInputModule } from 'projects/gin-lsl-ngx-uwp/src/lib/input/input.module';
// import { GuAppBarButtonModule } from 'projects/gin-lsl-ngx-uwp/src/lib/app-bar-button/app-bar-button.module';
// import { GuAppBarSeparatorModule } from 'projects/gin-lsl-ngx-uwp/src/lib/app-bar-separator/app-bar-separator.module';
// import { GuAppBarToggleButtonModule } from 'projects/gin-lsl-ngx-uwp/src/lib/app-bar-toggle-button/app-bar-toggle-button.module';
// import { GuToggleButtonModule } from 'projects/gin-lsl-ngx-uwp/src/lib/toggle-button/toggle-button.module';
// import { GuToggleSwitchModule } from 'projects/gin-lsl-ngx-uwp/src/lib/toggle-switch/toggle-switch.module';
import { GuNgxUwpModule } from 'projects/gin-lsl-ngx-uwp/src/public_api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuNgxUwpModule,
    FormsModule,
    // GuInputModule,
    // GuButtonModule,
    // GuAppBarButtonModule,
    // GuAppBarSeparatorModule,
    // GuAppBarToggleButtonModule,
    // GuToggleButtonModule,
    // GuToggleSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

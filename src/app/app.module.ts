import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from './shared/directives/keyboard-manager/disable-control/disable-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    YesNoButtonGroupModule,
    DisableControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from './shared/directives/keyboard-manager/disable-control/disable-control.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ModalModule } from './shared/components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    YesNoButtonGroupModule,
    DisableControlModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

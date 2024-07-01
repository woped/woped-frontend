import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TextFieldModule } from '@angular/cdk/text-field';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { SpinnerService } from '../utilities/SpinnerService';
import { T2PComponent } from './t2p.component';

@NgModule({
  declarations: [T2PComponent],
  exports: [T2PComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    TextFieldModule,
    MatSelectModule,
    SpinnerService,
    MatSnackBarModule,
    MatSnackBar,
  ],
  providers: [
    {
      provide: { MAT_FORM_FIELD_DEFAULT_OPTIONS },
      multi: true,
      useValue: { appearance: 'outline' },
    },
  ],

  bootstrap: [T2PComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class T2PModule {}

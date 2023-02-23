import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CustomUppercaseDirective } from './directives/custom-uppercase.directive';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';


@NgModule({
  declarations: [DialogContentComponent, CustomUppercaseDirective],
  exports: [DialogContentComponent, CustomUppercaseDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,

  ]
})
export class SharedModule { }

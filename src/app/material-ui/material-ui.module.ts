import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MaterialUiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNotesRoutingModule } from './app-notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { MainComponent } from './components/main/main.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';


@NgModule({
  declarations: [
    NoteComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AppNotesRoutingModule,
    MaterialUiModule
  ]
})
export class AppNotesModule { }

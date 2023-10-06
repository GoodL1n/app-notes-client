import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNotesRoutingModule } from './app-notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { MainComponent } from './components/main/main.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NoteComponent,
    MainComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    AppNotesRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppNotesModule { }

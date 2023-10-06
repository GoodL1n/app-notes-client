import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNotesRoutingModule } from './app-notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotesComponent } from './components/notes/notes.component';
import { TagsComponent } from './components/tags/tags.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { MainComponent } from './components/main/main.component';
import { TagComponent } from './components/tag/tag.component';
import { NewTagComponent } from './components/new-tag/new-tag.component';


@NgModule({
  declarations: [
    NoteComponent,
    NewNoteComponent,
    NavigationComponent,
    NotesComponent,
    TagsComponent,
    RemindersComponent,
    MainComponent,
    TagComponent,
    NewTagComponent
  ],
  imports: [
    CommonModule,
    AppNotesRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class AppNotesModule { }

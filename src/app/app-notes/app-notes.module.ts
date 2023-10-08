import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNotesRoutingModule } from './app-notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NoteComponent,
<<<<<<< HEAD
    NewNoteComponent,
    NavigationComponent,
    NotesComponent,
    TagsComponent,
    RemindersComponent,
    MainComponent,
    TagComponent,
    NewTagComponent
=======
    MainComponent,
    NewNoteComponent
>>>>>>> 8519451dd877a92084c37010e48b1bb68e59de32
  ],
  imports: [
    CommonModule,
    AppNotesRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule
<<<<<<< HEAD
  ],
  exports: [
    NavigationComponent
=======
>>>>>>> 8519451dd877a92084c37010e48b1bb68e59de32
  ]
})
export class AppNotesModule { }

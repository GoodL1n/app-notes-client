import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { TagsComponent } from './components/tags/tags.component';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
    {path: 'notes', component: NotesComponent},
    {path: 'reminders', component: RemindersComponent},
    {path: 'tags', component: TagsComponent},
    {path: '**', redirectTo: 'notes'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppNotesRoutingModule { }

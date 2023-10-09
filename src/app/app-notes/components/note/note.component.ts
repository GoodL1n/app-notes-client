import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;
  @Input() index!: number

  tags: Tag[] = []

  isNoteSelect: boolean = false;
  formEditNote!: FormGroup;

  constructor(private storageService: StorageDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tags = this.storageService.getTags()
  }

  editOpen(){
    this.formEditNote = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: this.note.title,
      content: this.note.content,
      tags: this.note.tags
    })
  }

  compareTag(tag1: Tag, tag2: Tag): boolean {
    console.log('1', tag1)
    console.log('2', tag2)
    return tag1 && tag2 ? tag1.name === tag2.name : tag1 === tag2;
  }
 
  submit() {
    this.note = this.formEditNote.value
    this.isNoteSelect = false;
  }
}

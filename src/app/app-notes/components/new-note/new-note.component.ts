import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageDataService } from '../../services/storage-data.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  @Output() isNewNoteOpen = new EventEmitter<boolean>()

  tags: Tag[] = []

  formNewNote!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private storageService: StorageDataService) { }

  ngOnInit(): void {
    this.formNewNote = this.createForm()
    this.tags = this.storageService.getTags()
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['']
    })
  }

  submit(): void {
    console.log(this.formNewNote.value)
    this.storageService.setNote(this.formNewNote.value)
    this.isNewNoteOpen.emit()
  }
}

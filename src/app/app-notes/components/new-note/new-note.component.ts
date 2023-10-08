import { Component, EventEmitter, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageDataService } from '../../services/storage-data.service';
import { Tag } from '../../models/tag.model';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageDataService } from '../../services/storage-data.service';
>>>>>>> 8519451dd877a92084c37010e48b1bb68e59de32

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  @Output() isNewNoteOpen = new EventEmitter<boolean>()

  formNewNote!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private storageService: StorageDataService) { }

  ngOnInit(): void {
    this.formNewNote = this.createForm()
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: '',
      content: ''
    })
  }

  submit(): void {
    this.storageService.setNote({
      title: this.formNewNote.value.title,
      content: this.formNewNote.value.content
    })
    this.isNewNoteOpen.emit()
  }
}

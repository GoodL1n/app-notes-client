import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../models/tag.model';
import { StorageDataService } from '../../services/storage-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag!: Tag;
  @Input() index!: number;

  isOpportuniteToDelete: boolean = false;
  isTagSelect: boolean = false;

  formTagEdit!: FormGroup;

  constructor(private storageService: StorageDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formTagEdit = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.tag.name
    })
  }

  deleteTag() {
    this.storageService.deleteTag(this.index);
  }

  submit() {
    this.tag = this.formTagEdit.value
    this.isTagSelect = false
  }
}

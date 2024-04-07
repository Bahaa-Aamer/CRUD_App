import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.css'],
})
export class CrudAppComponent implements OnInit {
  form: FormGroup;
  data = [];
  searchValue: string = '';
  isChecked: boolean = false;
  selectedIndex;
  uploadedImg;
  updatedImage;
  invalidUpdate;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, this.noNumbers]),
      title: new FormControl(null, [Validators.required, this.noNumbers]),
      img: new FormControl(null, []),
    });
  }

  add(info) {
    if (this.form.status != 'INVALID') {
      const record = { name: String, title: String, img: String };
      record.img = this.uploadedImg;
      record.name = info.name;
      record.title = info.title;
      this.data.push(record);
      this.uploadedImg = null;
      this.form.reset();
    } else alert('Incorrect details.');
  }

  ondelete(deletedItem) {
    this.data.splice(deletedItem, 1);
  }

  sortByProperty(data, sortBy: string = 'name') {
    return data.sort((a, b) => {
      const propertyA = a[sortBy]?.toLowerCase() || '';
      const propertyB = b[sortBy]?.toLowerCase() || '';
      return propertyA.localeCompare(propertyB);
    });
  }

  sortData() {
    this.sortByProperty(this.data, 'name');
  }

  noNumbers(control: FormControl) {
    if (/[0-9]/.test(control.value)) {
      alert('please add the right details.');
      return { noNumbers: true };
    }
    return null;
  }

  onEdit(i) {
    this.selectedIndex = i;
    this.invalidUpdate = false;
  }

  onSave(i, name, title, updateForm) {
    i = this.selectedIndex;
    if (name === '' || title === '' || /\d/.test(name) || /\d/.test(title)) {
      alert('your information is not correct');
      this.invalidUpdate = true;
    }
   
    else {
      this.invalidUpdate = false;
      this.data[i].name = name;
      this.data[i].title = title;
    }
    if (this.updatedImage != null) {
      this.data[i].img = this.updatedImage;
      this.updatedImage = null;
    }

    updateForm.reset();
  }

  handleFileInput(event) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.uploadedImg = reader.result;
    });

    reader.readAsDataURL(event.target.files[0]);
  }

  imageTypeCheck() {
    const allowedMimeTypes = ['JPEG', 'PNG', 'GIF', 'JPG'];

    if (!this.uploadedImg.includes(allowedMimeTypes)) {
      this.form.status === 'INVALID';
      alert('only images allowed');
      this.uploadedImg === null;

      return { imageTypeCheck: true };
    }
    return null;
  }

  updateImg(event) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.updatedImage = reader.result;
    });

    reader.readAsDataURL(event.target.files[0]);
  }
}

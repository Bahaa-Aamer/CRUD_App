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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  // form: FormGroup;
  // data = [];
  // searchValue: string = '';
  // isChecked: boolean = false;
  // editMode: boolean = false;
  // selectedIndex;
  // uploadedImg;

  // constructor() {}

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     name: new FormControl(null, [Validators.required, this.noNumbers]),
  //     title: new FormControl(null, [Validators.required, this.noNumbers]),
  //     img: new FormControl(null, []),
  //   });
  // }

  // add(info) {
  //   if (this.form.status != 'INVALID') {
  //     const record = { name: String, title: String, img: String };
  //     record.img = this.uploadedImg;
  //     record.name = info.name;
  //     record.title = info.title;
  //     this.data.push(record);

  //     this.form.reset();
  //   } else alert('Incorrect details.');
  // }

  // ondelete(deletedItem) {
  //   this.data.splice(deletedItem, 1);
  // }

  // sortByProperty(data, sortBy: string = 'name') {
  //   return data.sort((a, b) => {
  //     const propertyA = a[sortBy]?.toLowerCase() || '';
  //     const propertyB = b[sortBy]?.toLowerCase() || '';
  //     return propertyA.localeCompare(propertyB);
  //   });
  // }

  // sortData() {
  //   this.sortByProperty(this.data, 'name');
  // }

  // noNumbers(control: FormControl) {
  //   if (/[0-9]/.test(control.value)) {
  //     alert('please add the .');
  //     return { noNumbers: true };
  //   }
  //   return null;
  // }

  // onEdit(i) {
  //   this.editMode = true;
  //   this.selectedIndex = i;
  // }

  // onSave(i, name, title) {
  //   if (/\d/.test(name) || /\d/.test(title)) {
  //     alert("You can't add number");
  //   } else {
  //     this.editMode = false;
  //     this.selectedIndex = i;
  //   }
  // }

  // handleFileInput(event) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     this.uploadedImg = reader.result;
  //   });

  //   reader.readAsDataURL(event.target.files[0]);
  // }

  // imageTypeCheck() {
  //   const allowedMimeTypes = ['/jpeg', '/png', '/gif', 'jpg'];

  //   if (!allowedMimeTypes.includes(this.uploadedImg)) {
  //     this.form.status === 'INVALID';
  //     alert('only images allowed');

  //     return { imageTypeCheck: true };
  //   }
  //   return null;
  // }
}

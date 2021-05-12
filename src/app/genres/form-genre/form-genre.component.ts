import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { firstLetterUppercase } from 'src/app/validators/firstLetteruppercasevalidator';
import { genreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;


  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }]
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: genreCreationDTO;

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldname() {
    const field = this.form.get('name');

    if (field.hasError('required')) {
      return '*Name field is required';
    }
    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }
    return '';
  }

}

import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector-model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGeneres: multipleSelectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Action' },
    { key: 3, value: 'Comedy' },
  ];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    { key: 1, value: 'Arora' },
    { key: 2, value: 'Sambil' },
    { key: 3, value: 'Megacentro' },
  ];

  SelectedGeneres: multipleSelectorModel[] = [];
  selectedMovieTheaters: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    const genresIds = this.SelectedGeneres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);

    const movieTheatersIds = this.SelectedGeneres.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);

  }
  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

}

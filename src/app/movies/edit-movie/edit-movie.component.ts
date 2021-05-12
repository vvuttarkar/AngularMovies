import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = {
    title: 'Spider-Man', inTheaters: true, summary: "summary",
    releaseDate: new Date(), trailer: 'trailer',
    poster: 'https://secure-ds.serving-sys.com/resources//PROD/asset/1073743736/IMAGE/20210428/USEN_INPPYH_STATIC_300x250_BAN_MYTHQ_NO_LAU_STW_NA_NA_NA_62020454691377026.jpg'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }
  saveChanges(movieCreationDTO: movieCreationDTO) {

  }
}

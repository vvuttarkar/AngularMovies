import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.moviesinTheaters=[{
      title : 'SpiderMan',
      time: new Date(),
      poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title : 'Hero',
      time: new Date(),
      poster:'https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'

    }]

    this.moviesforFuture=[{
      title : 'hitman',
      time: new Date(),
      poster:'https://m.media-amazon.com/images/M/MV5BMDlmMmZhZjQtZDhlMi00MzU0LWIwYjMtNDRhOGE5YzczYjBmXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title : 'Batman',
      time: new Date(),
      poster:'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
    }];
  }
  
  moviesinTheaters;
  moviesforFuture;

}

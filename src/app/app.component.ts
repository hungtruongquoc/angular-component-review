import { Component } from '@angular/core';
import {count} from "rxjs";
import {JokeApiService} from "./services/JokeApiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-project';
  countDisplay: string = "Has changed to"

  constructor(private jokeService: JokeApiService) {
  }

  onCountChange(count: number) {
    this.countDisplay = `${this.countDisplay} ${count}`
  }

  ngOnInit() {
    this.jokeService.getJoke().subscribe((data) => {console.log(data)});
  }
}

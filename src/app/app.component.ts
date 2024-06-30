import { Component } from '@angular/core';
import {count, Observable} from "rxjs";
import {JokeApiService} from "./services/JokeApiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-project';
  countDisplay: string = "Has changed to"
  jokes: any[] = [];
  joke$: Observable<any>

  constructor(private jokeService: JokeApiService) {
  }

  onCountChange(count: number) {
    this.countDisplay = `${this.countDisplay} ${count}`
  }

  ngOnInit() {
    this.jokeService.getJoke().subscribe((data) => {
      this.jokes.push(data);
    });
    this.joke$ = this.jokeService.getJoke();
  }
}

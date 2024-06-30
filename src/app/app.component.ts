import { Component } from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-project';
  countDisplay: string = "Has changed to"

  onCountChange(count: number) {
    this.countDisplay = `${this.countDisplay} ${count}`
  }

  protected readonly count = count;
}

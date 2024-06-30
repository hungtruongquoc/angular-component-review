import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() counter: number = 0;
  @Output() counterChanged = new EventEmitter<number>();
  buttonList: {}[] = [{id: 1, label: "Change color"}];

  public increase(event) {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

  public decrease(event) {
    this.counter--;
    this.counterChanged.emit(this.counter);
  }
}

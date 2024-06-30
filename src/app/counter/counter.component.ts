import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() counter: number = 0;
  @Output() counterChanged = new EventEmitter<number>();

  @Output() inputChange = new EventEmitter<number>();

  buttonList: {}[] = [{id: 1, label: "Change color"}];

  @ViewChild("countInput", {static: true}) countInput: ElementRef;

  theme$: Observable<any>;

  constructor(private store: Store) {
    this.theme$ = this.store.select((state: any) => state.theme);
  }


  public increase(event) {
    this.counter++;
    this.counterChanged.emit(this.counter);
    this.inputChange.emit(this.countInput.nativeElement.value);
  }

  public decrease(event) {
    this.counter--;
    this.counterChanged.emit(this.counter);
    this.inputChange.emit(this.countInput.nativeElement.value);
  }
}

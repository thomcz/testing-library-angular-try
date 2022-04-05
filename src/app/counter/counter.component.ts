import {Component} from '@angular/core';
import {Counter, CounterRepository} from "./counter.repository";
import {Observable} from "rxjs";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$: Observable<Counter>

  constructor(private counterRepository: CounterRepository) {
    this.counter$ = counterRepository.loadEntity()
  }

  decrement(counter: Counter) {
    this.counterRepository.updateStore({
      value: counter.value - 1
    })
  }

  increment(counter: Counter) {
    this.counterRepository.updateStore({
      value: counter.value + 1
    })
  }
}

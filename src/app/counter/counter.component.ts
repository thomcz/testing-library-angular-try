import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  value = 0;

  decrement() {
    this.value -= 1;
  }

  increment() {
    this.value += 1;
  }
}

import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = signal(0);

  private loggingEffect = effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });

  decrement() {
   this.count.update(value => value - 1);
  }

  increment() {
    this.count.update(value => value + 1);
  }
}

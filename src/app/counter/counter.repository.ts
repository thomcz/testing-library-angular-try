import {Injectable} from '@angular/core';
import {createStore, select, withProps} from "@ngneat/elf";
import {Observable} from "rxjs";
import {Repository} from "./repository";

export interface Counter {
  value: number
}

const counterStore = createStore(
  {name: 'counter'},
  withProps<Counter>({value: 0})
);

@Injectable({
  providedIn: 'root'
})
export class CounterRepository extends Repository<Counter> {
  constructor() {
    super(counterStore);
  }

  updateStore(counter: Counter) {
    counterStore.update(this.write((state) => {
        state.value = counter.value;
      })
    );
    //
    // vs "spread hell" ?!
    //
    // counterStore.update(state => ({
    //     ...state,
    //     counter
    //   })
    // );
  }

  loadEntity(): Observable<Counter> {
    return counterStore.pipe(select((state) => state))
  }

  getLocalStorageName(): string {
    return "counter"
  }

}

import {Observable} from "rxjs";
import {produce} from 'immer';
import {localStorageStrategy, persistState} from "@ngneat/elf-persist-state";
import {Store} from "@ngneat/elf";

export abstract class Repository<T> {
  protected constructor(store: Store) {
    this.persist(store);
  }

  protected write<S>(updater: (state: S) => void): (state: S) => S {
    return function (state) {
      return produce(state, (draft) => {
        updater(draft as S);
      });
    };
  }

  private persist(store: Store) {
    persistState(store, {
      key: this.getLocalStorageName(),
      storage: localStorageStrategy,
    });
  }

  abstract getLocalStorageName(): string


  abstract updateStore(entity: T): void

  abstract loadEntity(): Observable<T>
}

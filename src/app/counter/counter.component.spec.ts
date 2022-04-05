import {CounterComponent} from './counter.component';
import {fireEvent, render, screen} from '@testing-library/angular';
import {TestBed} from '@angular/core/testing';
import {provideMockWithValues} from "@testing-library/angular/jest-utils";
import {CounterRepository} from "./counter.repository";
import {of} from "rxjs";

describe('CounterComponent', () => {
  describe('tested user interaction with testing-library', () => {

    describe('with input value', () => {

      beforeEach(async () => {
        await render(CounterComponent, {
          providers: [provideMockWithValues(CounterRepository, {
            loadEntity: jest.fn(() => of({value: 5}))
          })]
        });
      });

      it('renders the current value with given input', () => {
        TestBed.inject(CounterRepository);
        expect(screen.getByText('Current Count: 5'));
      });
    });

    describe('without input value', () => {
      beforeEach(async () => {
        await render(CounterComponent);
      });

      it('renders the current value and increment', () => {

        const incrementControl = screen.getByRole('button', {name: /increment/i});
        let valueControl = screen.getByTestId('value');

        expect(valueControl).toHaveTextContent('Current Count: 0');

        fireEvent.click(incrementControl);

        expect(valueControl).toHaveTextContent('Current Count: 1');
      });

      it('renders the current value and decrement', () => {

        const decrementControl = screen.getByRole('button', {name: /decrement/i});
        let valueControl = screen.getByTestId('value');

        expect(valueControl).toHaveTextContent('Current Count: 0');

        fireEvent.click(decrementControl);

        expect(valueControl).toHaveTextContent('Current Count: -1');
      });
    });
  });

  describe('tested only public methods', () => {

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          CounterComponent
        ],
      }).compileComponents();
    });

    // it('should correctly initialize', () => {
    //   const fixture = TestBed.createComponent(CounterComponent);
    //   const counterComponent = fixture.componentInstance;
    //
    //   expect(counterComponent.value).toEqual(0);
    // });
    //
    // it('should increment', () => {
    //   const fixture = TestBed.createComponent(CounterComponent);
    //   const counterComponent = fixture.componentInstance;
    //
    //   expect(counterComponent.value).toEqual(0);
    //
    //   counterComponent.increment();
    //
    //   expect(counterComponent.value).toEqual(1);
    // });
    //
    // it('should decrement', () => {
    //   const fixture = TestBed.createComponent(CounterComponent);
    //   const counterComponent = fixture.componentInstance;
    //
    //   expect(counterComponent.value).toEqual(0);
    //
    //   counterComponent.decrement();
    //
    //   expect(counterComponent.value).toEqual(-1);
    // });
  });
});

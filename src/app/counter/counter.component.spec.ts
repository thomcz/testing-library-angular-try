import {CounterComponent} from './counter.component';
import {fireEvent, render, screen} from '@testing-library/angular';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {signal} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('CounterComponent', () => {

  describe('black box testing with testing-library', () => {

    describe('with input value', () => {
      beforeEach(async () => {
        await render(CounterComponent, {componentProperties: {count: signal(5)}});
      });

      it('renders the current value with given input', () => {
        expect(screen.getByText('Current Count: 5' as any));
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


  describe('white box testing', () => {
    let fixture: ComponentFixture<CounterComponent>;
    let counterComponent: CounterComponent;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          CounterComponent
        ],
      }).compileComponents();
      fixture = TestBed.createComponent(CounterComponent);
      counterComponent = fixture.componentInstance;
    });

    it('should correctly initialize', () => {
      expect(counterComponent.count()).toEqual(0);
    });

    it('should increment', () => {
      expect(counterComponent.count()).toEqual(0);

      counterComponent.increment();

      expect(counterComponent.count()).toEqual(1);
    });

    it('should decrement', () => {
      expect(counterComponent.count()).toEqual(0);

      counterComponent.decrement();

      expect(counterComponent.count()).toEqual(-1);
    });
  });
});

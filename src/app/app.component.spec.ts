import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {fireEvent, render, screen} from '@testing-library/angular';
import {CounterComponent} from "./counter/counter.component";

describe('AppComponent', () => {
  describe('black box testing deep rendering with testing-library (integration test)', () => {
    beforeEach(async () => {
      await render(AppComponent, {
        declarations:[CounterComponent],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
      });
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

  describe('black box testing', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],

        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
      }).compileComponents();
    });

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'testing-library-angular-try'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('testing-library-angular-try');
    });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content h1')?.textContent).toContain('testing-library-angular-try app is running!');
    });
  });
  describe('black box testing with testing-library', () => {
    beforeEach(async () => {
      await render(AppComponent, {
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
      });
    });

    it('should render title', () => {
      expect(screen.getByText('testing-library-angular-try app is running!'));

      expect(screen.getByRole('main')).toHaveTextContent('testing-library-angular-try app is running!');
    });
  });
});

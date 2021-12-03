import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {render, screen} from '@testing-library/angular';

describe('AppComponent', () => {
  describe('without testing-library', () => {
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
      expect(compiled.querySelector('.content span')?.textContent).toContain('testing-library-angular-try app is running!');
    });
  });
  describe('with testing-library', () => {
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

import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { StarshipsStore } from './starships.store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'test',
  standalone: true,
  template: '<div></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
describe('StarshipsStore', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  let store: StarshipsStore;
  let apollo: Apollo;

  const mockStarships = [
    { name: 'Starship 1', model: 'Model 1' },
    { name: 'Starship 2', model: 'Model 2' },
  ];

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        StarshipsStore,
        {
          provide: Apollo,
          useValue: {
            query: () => of({ data: { getAllStarships: mockStarships } }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(StarshipsStore);
    apollo = TestBed.inject(Apollo);
    // fixture.detectChanges();
  });

  it('should create the store', () => {
    expect(store).toBeTruthy();
  });

  it('should load starships', fakeAsync(() => {
    jest.spyOn(apollo, 'query').mockImplementation((options: any) => {
      return of({
        data: { getAllStarships: mockStarships },
        loading: false,
        networkStatus: 7,
        stale: false,
      });
    });

    expect(store.starships()).toEqual(mockStarships);
    expect(store.state()).toEqual('loaded');
  }));

  it('should handle error', fakeAsync(() => {
    const error = new Error('Error loading starships');
    jest.spyOn(apollo, 'query').mockImplementation((options: any) => {
      throw error;
    });

    expect(store.starships()).toEqual([]);
    expect(store.state()).toEqual('error');
    expect(store.error()).toEqual(error);
  }));
});

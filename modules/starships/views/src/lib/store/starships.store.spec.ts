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
    fixture.detectChanges();
  });

  it('should create the store', () => {
    expect(store).toBeTruthy();
  });

  it('should load starships', fakeAsync(() => {}));

  it('should handle error', fakeAsync(() => {}));
});

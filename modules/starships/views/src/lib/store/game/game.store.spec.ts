import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { GameStore } from './game.store';
import { StarshipsStore } from '../starships/starships.store';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { TestComponent } from '../starships/starships.store.spec';
import {
  getRandomStarship,
  withId,
  IStarship,
} from '@randomfighter/starships-api';

describe('GameStore', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  let gameStore: GameStore;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  let store: StarshipsStore;
  let apollo: Apollo;

  const mockStarships: IStarship[] = Array.from(
    { length: 5 },
    withId(getRandomStarship)
  );

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        GameStore,
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
    gameStore = TestBed.inject(GameStore);
    apollo = TestBed.inject(Apollo);
    fixture.detectChanges();
  });

  it('should update selected', () => {
    gameStore.updateSelected([1, 2]);
    expect(gameStore.selected()).toEqual([1, 2]);
  });

  it('should start game when resource is selected', () => {
    gameStore.updateResource('cost_in_credits');
    TestBed.flushEffects();
    expect(gameStore.state()).toEqual('playing');
    gameStore.resetGame();
    expect(gameStore.state()).toEqual('initial');
  });
  it('should resolve game when both starships are selected', fakeAsync(() => {
    jest.spyOn(apollo, 'query').mockImplementation((options: any) => {
      return of({
        data: { getAllStarships: mockStarships },
        loading: false,
        networkStatus: 7,
        stale: false,
      });
    });
    TestBed.flushEffects();
    console.log(store.starships());
    gameStore.updateResource('cost_in_credits');
    gameStore.updateSelected([mockStarships[0].id, mockStarships[1].id]);
    TestBed.flushEffects();
    const result =
      mockStarships[0].cost_in_credits > mockStarships[1].cost_in_credits
        ? 0
        : 1;

    expect(gameStore.state()).toEqual('game-over');
    expect(gameStore.winner()).toEqual(result);
  }));
});

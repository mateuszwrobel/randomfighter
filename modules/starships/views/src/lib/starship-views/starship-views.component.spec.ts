import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipViewsComponent } from './starship-views.component';

describe('StarshipViewsComponent', () => {
  let component: StarshipViewsComponent;
  let fixture: ComponentFixture<StarshipViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipViewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

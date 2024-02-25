import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsStore } from '../store/starships/starships.store';
import { VersusComponent } from '../components/versus/versus.component';
import { GameStore } from '../store/game/game.store';
@Component({
  selector: 'randomfighter-starship-views',
  standalone: true,
  imports: [CommonModule, VersusComponent],
  templateUrl: './starship-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipsStore, GameStore],
})
export class StarshipViewsComponent {
  readonly store = inject(StarshipsStore);
  readonly gameStore = inject(GameStore);
}

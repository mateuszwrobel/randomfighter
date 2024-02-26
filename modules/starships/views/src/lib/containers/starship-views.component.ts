import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsStore } from '../store/starships/starships.store';
import { VersusComponent } from '../components/versus/versus.component';
import { GameStore } from '../store/game/game.store';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { DetailsComponent } from '../components/details/details.component';
import { PlayerHudComponent } from '../components/player-hud/player-hud.component';
import { StarshipId } from '@randomfighter/starships-api';
import { SelectResourceComponent } from '../components/select-resource/select-resource.component';
import { ResourcesKeys } from '../types/resources';
@Component({
  selector: 'randomfighter-starship-views',
  standalone: true,
  imports: [
    CommonModule,
    VersusComponent,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    DetailsComponent,
    PlayerHudComponent,
    SelectResourceComponent,
  ],
  templateUrl: './starship-views.component.html',
  styleUrls: ['./starship-views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipsStore, GameStore],
})
export class StarshipViewsComponent {
  readonly store = inject(StarshipsStore);
  readonly gameStore = inject(GameStore);

  onStarship1Change(id: StarshipId): void {
    this.gameStore.updateSelected([id, this.gameStore.selected()[1]]);
  }

  onStarship2Change(id: StarshipId): void {
    this.gameStore.updateSelected([this.gameStore.selected()[0], id]);
  }

  onResourceSelected(resource: ResourcesKeys): void {
    this.gameStore.updateResource(resource);
  }
}

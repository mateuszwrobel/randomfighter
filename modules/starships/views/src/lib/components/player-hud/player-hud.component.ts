import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  InputSignal,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStarship, StarshipId } from '@randomfighter/starships-api';
import { DetailsComponent } from '../details/details.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'randomfighter-player-hud',
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './player-hud.component.html',
  styleUrls: ['./player-hud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerHudComponent {
  readonly starships = input.required<Required<IStarship>[]>();
  readonly selected = input.required<StarshipId | null>();
  @Output() selectedChange = new EventEmitter<StarshipId>();

  readonly selectedStarship = computed(() =>
    this.starships().find((starship) => starship.id === this.selected())
  );

  onStarshipChange(id: StarshipId): void {
    this.selectedChange.emit(id);
  }
}

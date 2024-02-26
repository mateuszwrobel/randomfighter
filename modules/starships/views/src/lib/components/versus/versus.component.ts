import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStarship, StarshipId } from '@randomfighter/starships-api';
import { DetailsComponent } from '../details/details.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { PlayerHudComponent } from '../player-hud/player-hud.component';

@Component({
  selector: 'randomfighter-versus',
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
    PlayerHudComponent,
  ],
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersusComponent {
  readonly starships = input.required<Required<IStarship>[]>();
  readonly selected = input.required<[StarshipId | null, StarshipId | null]>();
  @Output() selectedChange = new EventEmitter<
    [StarshipId | null, StarshipId | null]
  >();

  onStarship1Change(id: StarshipId): void {
    this.selectedChange.emit([id, this.selected()[1]]);
  }

  onStarship2Change(id: StarshipId): void {
    this.selectedChange.emit([this.selected()[0], id]);
  }
}

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

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

  readonly selectedStarship1 = computed(() =>
    this.starships().find((starship) => starship.id === this.selected()[0])
  );
  readonly selectedStarship2 = computed(() =>
    this.starships().find((starship) => starship.id === this.selected()[1])
  );

  onStarship1Change(id: StarshipId): void {
    console.log('debug');
    this.selectedChange.emit([id, this.selected()[1]]);
  }

  onStarship2Change(id: StarshipId): void {
    this.selectedChange.emit([id, this.selected()[1]]);
  }
}

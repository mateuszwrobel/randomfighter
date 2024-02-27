import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStarship } from '@randomfighter/starships-api';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'randomfighter-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  starship = input.required<Required<IStarship | null>>();
  readonly starshipHack = computed(
    () => this.starship() as Required<IStarship>
  );
}

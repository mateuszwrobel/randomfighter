import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsStore } from '../store/starships.store';
import { VersusComponent } from '../components/versus/versus.component';
@Component({
  selector: 'randomfighter-starship-views',
  standalone: true,
  imports: [CommonModule, VersusComponent],
  templateUrl: './starship-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipsStore],
})
export class StarshipViewsComponent {
  readonly store = inject(StarshipsStore);
}

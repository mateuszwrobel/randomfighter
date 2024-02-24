import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'randomfighter-starship-views',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-views.component.html',
  styleUrl: './starship-views.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipViewsComponent {}

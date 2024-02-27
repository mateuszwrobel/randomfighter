import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { resources, ResourcesKeys } from '../../types/resources';

@Component({
  selector: 'randomfighter-select-resource',
  standalone: true,
  imports: [CommonModule, MatFormField, MatLabel, MatOption, MatSelect],
  templateUrl: './select-resource.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectResourceComponent {
  readonly disabled = input<boolean>(false);
  readonly selected = input.required<ResourcesKeys | null>();
  @Output() selectedChange = new EventEmitter<ResourcesKeys>();
  resources = resources;

  onResourceSelected(resource: ResourcesKeys): void {
    this.selectedChange.emit(resource);
  }
}

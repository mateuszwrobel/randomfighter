export const resources = [
  { value: 'cargo_capacity', label: 'Cargo Capacity' },
  { value: 'cost_in_credits', label: 'Cost in Credits' },
  { value: 'crew', label: 'Crew' },
  { value: 'hyperdrive_rating', label: 'Hyperdrive Rating' },
  { value: 'length', label: 'Length' },
  { value: 'max_atmosphering_speed', label: 'Max Atmosphering Speed' },
] as const;
export type ResourcesKeys = (typeof resources)[number]['value'];

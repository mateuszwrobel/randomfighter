import { MigrationError } from 'umzug';
import { migrator } from '../migrator';

try {
  migrator.up();
} catch (e) {
  if (e instanceof MigrationError) {
    const original = e.cause;
    console.error(original);
  }
  throw e;
}

import { MigrationError } from 'umzug';
import { seeder } from '../seeder';

try {
  seeder.down();
} catch (e) {
  if (e instanceof MigrationError) {
    const original = e.cause;
    console.error(original);
  }
  throw e;
}

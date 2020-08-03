import { Application } from '../declarations';
import users from './users/users.service';
import warframes from './warframes/warframes.service';
import parts from './parts/parts.service';
import sets from './sets/sets.service';
import inventory from './inventory/inventory.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(warframes);
  app.configure(parts);
  app.configure(sets);
  app.configure(inventory);
}

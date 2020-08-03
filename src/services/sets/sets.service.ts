// Initializes the `sets` service on path `/sets`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Sets } from './sets.class';
import createModel from '../../models/sets.model';
import hooks from './sets.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sets': Sets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sets', new Sets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sets');

  service.hooks(hooks);
}

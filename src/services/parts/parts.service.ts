// Initializes the `parts` service on path `/parts`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Parts } from './parts.class';
import createModel from '../../models/parts.model';
import hooks from './parts.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'parts': Parts & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/parts', new Parts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('parts');

  service.hooks(hooks);
}

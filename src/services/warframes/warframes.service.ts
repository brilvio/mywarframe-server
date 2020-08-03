// Initializes the `warframes` service on path `/warframes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Warframes } from './warframes.class';
import createModel from '../../models/warframes.model';
import hooks from './warframes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'warframes': Warframes & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/warframes', new Warframes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('warframes');

  service.hooks(hooks);
}

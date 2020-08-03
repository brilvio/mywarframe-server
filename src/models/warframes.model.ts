// warframes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const modelName = 'warframes';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String },
      image: { type: String },
      havePrime: { type: Boolean },
      isOnVault: { type: Boolean },
      parts: [{ name: String, dropFrom: String, relic: { type: Schema.Types.ObjectId, ref: 'relics' } }],
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
}

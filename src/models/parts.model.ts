// parts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Model, Mongoose } from 'mongoose';
import { Application } from '../declarations';

export default function (app: Application): Model<any> {
  const modelName = 'parts';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String },
      isPrime: { type: Boolean },
      isOnVault: { type: Boolean },
      dropsFrom: [{ type: String, required: true }],
      relic: { type: Schema.Types.ObjectId, ref: 'relics' },
      needs: { sets: { type: Schema.Types.ObjectId, ref: 'sets' }, quantity: Number },
      set: { type: Schema.Types.ObjectId, ref: 'sets' },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// * representa1tion of what we are going to be saving into our database
@Schema()
export class Pokemon extends Document {
  // * id:string <-- mongo already defines it for me, therefore no need to put it here
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  num: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

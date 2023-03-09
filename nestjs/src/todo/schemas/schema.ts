import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;
  @Prop()
  description?: string;
  @Prop()
  completeAt?: Date;
  @Prop()
  createAt: Date;
  @Prop()
  deleteAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

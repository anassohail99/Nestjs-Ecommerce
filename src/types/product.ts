import { Document } from 'mongoose';
import { User } from './user';

export interface Product extends Document {
  order: User;
  title: string;
  description: string;
  image: string;
  price: string;
  created: Date;
}
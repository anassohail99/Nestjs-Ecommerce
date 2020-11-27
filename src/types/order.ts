import { Product } from './product';
import { Document } from 'mongoose';
import { User } from './user';

interface ProductOrder {
    products: Product;
    quantity: number;
}


export interface Order extends Document {
    owner: User;
    totalPrice: number;
    product: ProductOrder[];
    created: Date;
}
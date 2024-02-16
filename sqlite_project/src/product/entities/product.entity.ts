// product.entity.ts

import { Table, Column, Model, HasOne, HasMany } from 'sequelize-typescript';
import { ProductDetail } from '../../details/entities/product-detail.entity';
import { Review } from '../../review/entities/review.entity';

@Table
export class Product extends Model {

    @Column
    title: string;

    @Column
    description: string;

    @Column
    price: string;

    @HasOne(() => ProductDetail)
    productDetail: ProductDetail;

    @HasMany(() => Review)  // Update to HasMany for one-to-many relationship
    reviews: Review[];  // Update to plural 'reviews'

}

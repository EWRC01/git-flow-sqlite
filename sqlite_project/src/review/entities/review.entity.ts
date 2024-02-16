// review.entity.ts

import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from '../../product/entities/product.entity';

@Table
export class Review extends Model {
    @Column
    comment: string;

    @ForeignKey(() => Product)
    @Column
    productId: number;

    @BelongsTo(() => Product)  // Add BelongsTo for the reverse association
    product: Product;
}

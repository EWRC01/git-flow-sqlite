// product-detail.entity.ts

import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from '../../product/entities/product.entity';

@Table
export class ProductDetail extends Model {
    @Column
    details: string;

    @ForeignKey(() => Product)
    @Column
    productId: number;

    @BelongsTo(() => Product, 'productId')
    product: Product;
}

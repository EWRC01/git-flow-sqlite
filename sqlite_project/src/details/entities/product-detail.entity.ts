import { Table, Column, Model, ForeignKey} from 'sequelize-typescript';
import { Product } from '../../product/entities/product.entity';

@Table
export class ProductDetail extends Model {
    @Column
    details: string;

    @ForeignKey(() => Product)
    @Column
    productId: number;
}
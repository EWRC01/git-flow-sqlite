
import {Table, Column, Model} from 'sequelize-typescript';



@Table
export class Product extends Model {

    @Column
    title: string;

    @Column
    description: string;

    @Column
    price: string;

}

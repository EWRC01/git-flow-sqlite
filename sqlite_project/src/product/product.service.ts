import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {


  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto) {
    return  this.productRepository.create(createProductDto as any)
  }

  findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: number) {

    const productFound = await this.productRepository.findOne(  {where: {
      id
    }})

    if (!productFound) {
      return new HttpException('User not Found', HttpStatus.NOT_FOUND)
    }
    return productFound
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

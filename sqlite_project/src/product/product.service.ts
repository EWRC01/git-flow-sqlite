// product.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Review } from 'src/review/entities/review.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto as any);
  }

  async findAll() {
    return await this.productRepository.findAll({
      include: [Review],  // Include reviews when fetching products
    });
  }

  async findOne(id: number) {
    return await this.productRepository.findByPk(id, {
      include: [Review],  // Include reviews when fetching a product
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productFound = await this.productRepository.findByPk(id);

    if (!productFound) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    await productFound.update(updateProductDto);

    // Fetch the updated product with associated reviews
    return this.productRepository.findByPk(id, {
      include: [Review],
    });
  }

  async remove(id: number) {
    const productFound = await this.productRepository.findByPk(id);

    if (!productFound) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return await productFound.destroy();
  }
}

// product.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Review } from 'src/review/entities/review.entity';
import { ProductDetail } from 'src/details/entities/product-detail.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product=  await this.productRepository.create(createProductDto as any);
    //await this.detailRepository.create(product.id, createProductDto as any);
    return product
  }

  async findAll() {
    return await this.productRepository.findAll({
      include: [Review, ProductDetail],  // Include reviews when fetching products
    });
  }

  async findOne(id: number) {
    return await this.productRepository.findByPk(id, {
      include: [Review, ProductDetail],  // Include reviews when fetching a product
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
      include: [Review, ProductDetail],
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

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

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto as any);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: number) {
    const productFound = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!productFound) {
      return new HttpException('User not Found', HttpStatus.NOT_FOUND);
    }
    return productFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productFound = await this.productRepository.findOne({
      where: { id },
    });

    if (!productFound) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    await this.productRepository.update(updateProductDto, { where: { id } });

    const updatedProduct = await this.productRepository.findByPk(id);
    return updatedProduct;
  }

  async remove(id: number) {
    const productFound = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!productFound) {
      return new HttpException('Product not Found', HttpStatus.NOT_FOUND);
    }

    return this.productRepository.destroy({
      where: {
        id,
      },
    });
  }
}

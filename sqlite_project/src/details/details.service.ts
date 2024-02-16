import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/product/entities/product.entity';
import { ProductDetail } from './entities/product-detail.entity';

@Injectable()
export class DetailsService {

  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
    @InjectModel(ProductDetail)
    private readonly productDetailRepository: typeof ProductDetail,
  ) {}

  async create(productId: number, createDetailDto: CreateDetailDto) {
    const productFound = await this.productRepository.findByPk(productId);

    if (!productFound) {
        throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
    }

    const detail = await this.productDetailRepository.create(createDetailDto as any);

    // Associate the ProductDetail with the Product using set method
    await detail.$set('product', productFound);

    return detail;
}


  async findAll() {
    const product = await this.productDetailRepository.findAll();
    return product;
  }

  async findOne(id: number) {

    const product = await this.productRepository.findByPk(id);

    if (!product) {
      throw new HttpException('Product Not Found!', HttpStatus.NOT_FOUND);
    }

    return this.productDetailRepository.findByPk(id);
  }

  update(id: number, updateDetailDto: UpdateDetailDto) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}

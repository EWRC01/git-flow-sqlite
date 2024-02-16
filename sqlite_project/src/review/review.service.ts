// review.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './entities/review.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class ReviewService {

  constructor(
    @InjectModel(Review) private readonly reviewRepository: typeof Review,
    @InjectModel(Product) private readonly productRepository: typeof Product,
  ) {}

  async create(productId: number, createReviewDto: CreateReviewDto) {
    const product = await this.productRepository.findByPk(productId);

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    const review = await this.reviewRepository.create(createReviewDto as any);
    await product.$add('reviews', review);

    return review;
  }

  findAll() {
    return this.reviewRepository.findAll();
  }

  async findOne(id: number) {
    const review = await this.reviewRepository.findByPk(id);

    if (!review) {
      throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
    }

    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const reviewFound = await this.reviewRepository.findByPk(id);

    if (!reviewFound) {
      throw new HttpException('Review not found!', HttpStatus.NOT_FOUND);
    }

    await reviewFound.update(updateReviewDto);
  }

  async remove(id: number) {
    const reviewFound = await this.reviewRepository.findByPk(id);

    if(!reviewFound) {
      throw new HttpException('Review Not Found!', HttpStatus.NOT_FOUND);
    }

    return reviewFound.destroy();
  }
}

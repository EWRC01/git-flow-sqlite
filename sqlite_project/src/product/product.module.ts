import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Review } from 'src/review/entities/review.entity';
import { ReviewController } from 'src/review/review.controller';
import { ReviewService } from 'src/review/review.service';


@Module({
  imports: [SequelizeModule.forFeature([Product, Review])],
  controllers: [ProductController, ReviewController],
  providers: [ProductService, ReviewService],
})
export class ProductModule {}

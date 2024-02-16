import { Module, forwardRef } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './entities/review.entity';
import { ProductModule } from 'src/product/product.module';
import { Product } from 'src/product/entities/product.entity';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';


@Module({
  imports: [SequelizeModule.forFeature([Review, Product])],
  controllers: [ReviewController, ProductController],
  providers: [ReviewService, ProductService],
})
export class ReviewModule {}

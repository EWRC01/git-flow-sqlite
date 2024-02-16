import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Review } from 'src/review/entities/review.entity';
import { ReviewController } from 'src/review/review.controller';
import { ReviewService } from 'src/review/review.service';
import { ProductDetail } from 'src/details/entities/product-detail.entity';
import { DetailsController } from 'src/details/details.controller';
import { DetailsService } from 'src/details/details.service';


@Module({
  imports: [SequelizeModule.forFeature([Product, Review, ProductDetail])],
  controllers: [ProductController, ReviewController, DetailsController],
  providers: [ProductService, ReviewService, DetailsService],
})
export class ProductModule {}

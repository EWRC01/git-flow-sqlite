import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductDetail } from './entities/product-detail.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [SequelizeModule.forFeature([ProductDetail, Product])],
  controllers: [DetailsController, ProductController],
  providers: [DetailsService, ProductService],
})
export class DetailsModule {}

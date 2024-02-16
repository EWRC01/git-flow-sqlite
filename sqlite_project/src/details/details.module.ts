import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductDetail } from './entities/product-detail.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductDetail])],
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class DetailsModule {}

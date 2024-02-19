import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { ReviewModule } from './review/review.module';
import { DetailsModule } from './details/details.module';

@Module({
  imports: [ProductModule, ReviewModule, DetailsModule, SequelizeModule.forRoot(dataBaseConfig)]
})
export class AppModule {}

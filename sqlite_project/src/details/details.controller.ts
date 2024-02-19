import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailsService } from './details.service';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';


@ApiTags('details')
@Controller('details')
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Post(':productId')
  @ApiResponse({ status: 201, description: 'The detail has been successfully created.'})
  create(@Param('productId') productId: number, @Body() createDetailDto: CreateDetailDto) {
    return this.detailsService.create(productId, createDetailDto);
  }

  @Get()
  findAll() {
    return this.detailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailDto: UpdateDetailDto) {
    return this.detailsService.update(+id, updateDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailsService.remove(+id);
  }
}

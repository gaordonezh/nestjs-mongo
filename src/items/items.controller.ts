import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':_id')
  findOne(@Param() params: object) {
    return this.itemsService.findOne(params);
  }

  @Put(':_id')
  updateOne(@Param() params: object, @Body() body: UpdateItemDto) {
    return this.itemsService.updateOne(params, body);
  }

  @Delete(':_id')
  deleteOne(@Param() params: object) {
    return this.itemsService.deleteOne(params);
  }
}

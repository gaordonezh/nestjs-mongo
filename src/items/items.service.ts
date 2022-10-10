import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.itemsModule.create(createItemDto);
    return itemCreated;
  }

  async findAll() {
    const items = await this.itemsModule.find();
    return items;
  }

  async findOne(params: object) {
    const item = await this.itemsModule.findOne(params);
    return item;
  }

  async updateOne(params: object, updateItemDto: UpdateItemDto) {
    const item = await this.itemsModule.findOneAndUpdate(
      params,
      updateItemDto,
      { new: true },
    );
    return item;
  }

  async deleteOne(params: object) {
    const item = await this.itemsModule.findOneAndDelete(params, { new: true });
    return item;
  }
}

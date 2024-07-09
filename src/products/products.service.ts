import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createProductDto: CreateProductDto) {
    return this.databaseService.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.databaseService.product.findMany();
  }

  findOne(id: number) {
    return this.databaseService.product.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    await this.databaseService.product.delete({ where: { id } });
  }
}

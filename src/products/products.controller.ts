import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productServices: ProductsService) {}
  // GET /products --> []
  @Get()
  getProducts() {
    return this.productServices.getProducts();
  }
  // GET specific /products/:id --> {...}
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productServices.getProduct(+id);
  }
  // POST /products ---> []
  @Post()
  createProduct(@Body() createProductDto: CreateProductsDto) {
    return this.productServices.createProduct(createProductDto);
  }
  // PUT /products/:id ---> {...}
  @Put(':id')
  updateProduct(@Param('id') id: string, updateProductDto: UpdateProductsDto) {
    return this.productServices.updateProduct(+id, updateProductDto);
  }
  // DELETE /products/:id
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productServices.deleteProduct(+id);
  }
}

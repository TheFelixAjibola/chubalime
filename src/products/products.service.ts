import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Molly',
      description: 'Teddy bear',
      price: 'N3000',
      sku: 'DR-123',
      category: 'Toy',
      quantity: 50,
      image: 'none',
      weight: '3.2kg',
      dimension: '2x4',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      description: '2018, Retina, 15-inch, 256-SSD, 16GB-RAM',
      price: '$2700',
      sku: 'DF-989',
      category: 'Laptop',
      quantity: 30,
      image: 'none',
      weight: '9.8kg',
      dimension: '9x9',
    },
  ];

  getProducts(category?: 'Toys' | 'Laptop') {
    if (category) {
      return this.products.filter((product) => product.category === category);
    }
    return this.products;
  }

  getProduct(id: number) {
    const productSearch = this.products.find((product) => product.id === id);

    if (!productSearch) {
      throw new Error('Product not available');
    }
    return productSearch;
  }

  createProduct(createProductsDto: CreateProductsDto) {
    const NewProduct = {
      ...createProductsDto,
      id: Date.now(),
    };

    this.products.push(NewProduct);

    return NewProduct;
  }

  updateProduct(id: number, updateProductDto: UpdateProductsDto) {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...updateProductDto };
      }
    });

    return this.getProduct(id);
  }

  deleteProduct(id: number) {
    const deleteProd = this.getProduct(id);

    this.products = this.products.filter((product) => product.id !== id);

    return deleteProd;
  }
}

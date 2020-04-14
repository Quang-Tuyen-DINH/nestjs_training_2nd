import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService){}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
    ) {
    const generateId = this.productService.insertProduct(prodTitle, prodDescription, prodPrice);
    return {id: generateId};
  }

  @Get()
  getAllProducts() {
    return {products: this.productService.getProducts()};
  }

  @Get(':id')
  getProduct(
    @Param('id') prodId: string
  ) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    this.productService.updateProduct(prodId, prodTitle, prodDescription, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(
    @Param('id') prodId: string
  ) {
    this.productService.deleteproduct(prodId);
    return null;
  }
}
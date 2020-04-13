import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
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
    @Param('id') productId: string
  ) {
    return this.productService.getSingleProduct(productId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    
  }
}
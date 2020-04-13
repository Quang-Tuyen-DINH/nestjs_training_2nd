import { Controller, Post, Body, Get } from "@nestjs/common";
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
    return this.productService.getProducts();
  }
}
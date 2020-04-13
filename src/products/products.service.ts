import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(
    title: string,
    description: string,
    price: number
  ) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((products) => products.id === productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return {...product};
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number) {

  }

  private findProduct(Id: string) {
    const product = this.products.find((products) => products.id === Id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
  }
}
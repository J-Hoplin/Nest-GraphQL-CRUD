import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from '../schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteProductInput, ProductInput, UpdateProductInput } from './inputs';
import { v4 } from 'uuid';

@Injectable()
export class ProudctsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) { }

  async getAllProduct() {
    return await this.productModel.find({});
  }

  async getProductById(id: number) {
    return await this.productModel.find({
      id,
    });
  }

  async addProuct(input: ProductInput) {
    const { name, price, description } = input;
    const id = v4();
    await this.productModel.create({
      id,
      name,
      price,
      description,
    });
  }
  async updateProduct(input: UpdateProductInput) {
    const { id } = input;
    const findUser = await this.productModel.find({
      id,
    });
    if (!findUser.length) {
      return false;
    }
    await this.productModel.updateOne({
      id,
    });
    return true;
  }
  async deleteProduct(input: DeleteProductInput) {
    const { id } = input;
    const findUser = await this.productModel.find({
      id,
    });
    if (!findUser.length) {
      return false;
    }
    await this.productModel.deleteOne({
      id,
    });
    return true;
  }
}

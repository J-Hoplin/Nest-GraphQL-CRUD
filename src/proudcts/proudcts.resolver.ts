import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProudctsService } from './proudcts.service';
import { ProductInput, UpdateProductInput, DeleteProductInput } from './inputs';

@Resolver('Proudct')
export class ProudctsResolver {
  constructor(private readonly proudctsService: ProudctsService) { }

  @Query()
  async getAllProduct() {
    return await this.proudctsService.getAllProduct();
  }

  @Query()
  async getProduct(@Args('id') id: number) {
    return [];
  }

  @Mutation((returns) => Boolean)
  async addProduct(@Args('input') input: ProductInput) {
    try {
      await this.proudctsService.addProuct(input);
      return true;
    } catch (err) {
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updateProduct(@Args('input') input: UpdateProductInput) {
    try {
      const result = await this.proudctsService.updateProduct(input);
      return result;
    } catch (err) {
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async deleteProduct(@Args('input') input: DeleteProductInput) {
    try {
      const result = await this.proudctsService.deleteProduct(input);
      return result;
    } catch (err) {
      return false;
    }
  }
}

import { Module } from '@nestjs/common';
import { ProudctsService } from './proudcts.service';
import { ProudctsResolver } from './proudcts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProudctsResolver, ProudctsService],
})
export class ProudctsModule { }

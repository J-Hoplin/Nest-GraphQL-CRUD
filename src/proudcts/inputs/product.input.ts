import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ProductType {
    GADGET = "GADGET",
    FOOD = "FOOD",
    SOFTWARE = "SOFTWARE"
}

export class ProductInput {
    name: string;
    price: number;
    description?: Nullable<string>;
}

export class UpdateProductInput {
    id: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
    description?: Nullable<string>;
}

export class DeleteProductInput {
    id: string;
}

export interface Base {
    id: string;
    name: string;
}

export interface Management {
    phoneNumber: string;
}

export class Product {
    id: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllProduct(): Product[] | Promise<Product[]>;

    abstract getProduct(id: string): Product | Promise<Product>;
}

export abstract class IMutation {
    abstract addProduct(input?: Nullable<ProductInput>): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract updateProduct(input?: Nullable<UpdateProductInput>): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteProduct(input?: Nullable<DeleteProductInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export type Datetime = any;
type Nullable<T> = T | null;

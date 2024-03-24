import { Product } from "./Product";

export class CartItemDetails {
    constructor(
      public index?:number,
      public cartItemId?:number,
      public product?:Product,
      public totalPrice?:number,
      public quantity?:number
    ) {}
  }
  
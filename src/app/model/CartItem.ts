export class CartItem {
    constructor(
      public id:number,
      public cartId:number,
      public productId:number,
      public totalPrice:number,
      public quantity:number
    ) {}
  }
  
  
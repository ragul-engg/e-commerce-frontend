import { Address } from "../Address";
import { paymentDetails } from "../payment/paymentDetails";
import { OrderItem } from "./OrderItem";

export interface Order {
   id:number,
   customerId:number,
   firstName:string,
   lastName:string,
   orderItem:OrderItem[],
   totalPrice:number,
   orderDate:Date,
   deliveryDate:Date,
   address:Address,
   transactionId:string,
   paymentDetails:paymentDetails,
   orderStatus:string,
   totalItems:number
   

  }
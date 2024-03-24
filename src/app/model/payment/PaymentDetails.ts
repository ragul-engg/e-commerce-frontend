import { CardInfo } from "./CardInfo";

export interface paymentDetails {
    paymentId:number,
    paymentMethod:string,
    orderId:number,
    status:boolean,
    cardInfo:CardInfo
  }
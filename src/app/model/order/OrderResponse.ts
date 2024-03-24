import { Order } from "./Order";

export interface OrderResponse{
    order:Order,
    stockIssues:string[]
}
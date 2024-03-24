import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/service/notify.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private router:Router,private notify:NotifyService,private orderService:OrderService){

  }

  ngOnInit() {
    
  }

}

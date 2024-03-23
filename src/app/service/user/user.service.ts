import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/Profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  baseURL = `http://localhost:8080`;



  //get user details as profile {userId,firstname,lastname,username,role,mobile,email,customerId,address,cartid}

  getUserProfile():Observable<Profile>{
    console.log('came here');
    
    return this.httpClient.get<Profile>(`${this.baseURL}/profile`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
      },
      params:{
        token: localStorage.getItem('TOKEN')|| '',
      }
      
    });
  }

}

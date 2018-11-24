import { Injectable } from '@angular/core';
import { Common } from '../Helper/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiReturnModel } from '../Model/api-return-model';

@Injectable({
  providedIn: 'root'
})
export class BossServiceService extends Common {

  constructor(private client:HttpClient) {
    super();
  }

  GetAllAM(){
    return this.client.get<ApiReturnModel>(this.apiHost+"api/Boss/GetAllAM");
  }

  GetByID(id:string){
    return this.client.get<ApiReturnModel>(this.apiHost+"api/Boss/GetByID/"+id);
  }

  Add(bm:object){
    return this.client.post<ApiReturnModel>(this.apiHost+"api/Boss/Add/",bm);
  }

  Edit(bm:object){
    return this.client.put<ApiReturnModel>(this.apiHost+"api/Boss/Edit/",bm);
  }

  DeleteRange(ids:string[]){
    return this.client.post<ApiReturnModel>(this.apiHost+"api/Boss/DeleteRange/",ids);
  }
}

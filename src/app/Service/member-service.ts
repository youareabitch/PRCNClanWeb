import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from '../Helper/common';
import { ApiReturnModel } from '../Model/api-return-model';

@Injectable({
    providedIn: 'root'
  })
export class MemberService extends Common {
    constructor(private client:HttpClient) {
        super();
    }

    GetAllAM(){
        return this.client.get<ApiReturnModel>(this.apiHost+"api/Member/GetAllAM");
      }
    
      GetByID(id:string){
        return this.client.get<ApiReturnModel>(this.apiHost+"api/Member/GetByID/"+id);
      }
    
      Add(bm:object){
        return this.client.post<ApiReturnModel>(this.apiHost+"api/Member/Add/",bm);
      }
    
      Edit(bm:object){
        return this.client.put<ApiReturnModel>(this.apiHost+"api/Member/Edit/",bm);
      }
    
      DeleteRange(ids:string[]){
        return this.client.post<ApiReturnModel>(this.apiHost+"api/Member/DeleteRange/",ids);
      }
}

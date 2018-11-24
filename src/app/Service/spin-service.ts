import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SpinService {
    private isSpinning = new Subject<any>();

    constructor() {
     }
  
    GetIsSpinnging(){
      return this.isSpinning.asObservable();
    }
  
    Spin(){
      this.isSpinning.next(true);
    }
  
    UnSpin(){
      this.isSpinning.next(false);
    }
}


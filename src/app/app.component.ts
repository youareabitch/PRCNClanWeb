import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinService } from './Service/spin-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '公主連結戰隊管理系統';
  private subscription: Subscription;
  isSpinning:any;

  constructor(private spinService: SpinService) { }

  ngOnInit() {
    this.subscription = this.spinService.GetIsSpinnging().subscribe(x => { 
      this.isSpinning = x;
    });
  }
}

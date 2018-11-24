import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from '../../../node_modules/ng-zorro-antd';
import { BossServiceService } from '../Service/boss-service.service';
import { BossBM } from '../Model/boss-bm';

@Component({
  selector: 'app-boss-detail',
  templateUrl: './boss-detail.component.html',
  styleUrls: ['./boss-detail.component.css']
})
export class BossDetailComponent implements OnInit {
  bossID:string="";
  boss:BossBM=new BossBM();

  constructor(private bossService:BossServiceService,
            private route:ActivatedRoute,
            private router:Router,
            private spinService:SpinService,
            private alertService: NzMessageService) { 
    this.route.params.subscribe(x=>this.bossID=x.id);
            }

  ngOnInit() {
    if(this.bossID!=undefined){
      this.spinService.Spin();
      this.bossService.GetByID(this.bossID).subscribe(x=>{
        if(x.result){
          this.boss=x.data;
        }else{
          this.alertService.error(x.message);
        }
      this.spinService.UnSpin();
      },error=>{
        this.alertService.error(error.message);
      this.spinService.UnSpin();
      });
    }
  }

  Save(){
    this.spinService.Spin();
    if(this.bossID==undefined){ //新增
      this.bossService.Add(this.boss).subscribe(x=>{
        if(x.result){
          this.alertService.success("新增成功");
          this.router.navigate(["/BossManage"]);
        }else{
          this.alertService.error(x.message);
        }
      this.spinService.UnSpin();
      },error=>{
        this.alertService.error(error.message);
      this.spinService.UnSpin();
      });
    }else{ //修改
      this.spinService.Spin();
      this.bossService.Edit(this.boss).subscribe(x=>{
        if(x.result){
          this.alertService.success("修改成功");
          this.router.navigate(["/BossManage"]);
        }else{
          this.alertService.error(x.message);
        }
      this.spinService.UnSpin();
      },error=>{
        this.alertService.error(error.message);
      this.spinService.UnSpin();
      });
    }
  }
}

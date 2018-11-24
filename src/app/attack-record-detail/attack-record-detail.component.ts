import { Component, OnInit } from '@angular/core';
import { AttackRecordBM } from '../Model/attack-record-bm';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from '../../../node_modules/ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { AttackRecordService } from '../Service/attack-record.service';
import { MemberBM } from '../Model/member-bm';
import { MemberService } from '../Service/member-service';
import { BossBM } from '../Model/boss-bm';
import { BossServiceService } from '../Service/boss-service.service';

@Component({
  selector: 'app-attack-record-detail',
  templateUrl: './attack-record-detail.component.html',
  styleUrls: ['./attack-record-detail.component.css']
})
export class AttackRecordDetailComponent implements OnInit {
  attackRecordID:string="";
  attackRecord:AttackRecordBM=new AttackRecordBM();
  memberData:MemberBM[];
  bossData:BossBM[];

  constructor(private attackRecordService:AttackRecordService,
              private memberService:MemberService,
              private bossService:BossServiceService,
              private route:ActivatedRoute,
              private router:Router,
              private spinService:SpinService,
              private alertService: NzMessageService) {
    this.route.params.subscribe(x=>this.attackRecordID=x.id);
               }

  ngOnInit() {
    //取成員資料
    this.spinService.Spin();
    this.memberService.GetAllBM().subscribe(x=>{
      if(x.result){
        this.memberData=x.data;
      }else{
        this.alertService.error(x.message);
      }
    this.spinService.UnSpin();
    },error=>{
      this.alertService.error(error.message);
    this.spinService.UnSpin();
    });

    //取Boss資料
    this.spinService.Spin();
    this.bossService.GetAllBM().subscribe(x=>{
      if(x.result){
        this.bossData=x.data;
      }else{
        this.alertService.error(x.message);
      }
    this.spinService.UnSpin();
    },error=>{
      this.alertService.error(error.message);
    this.spinService.UnSpin();
    });

    this.attackRecord.Round=2;
    this.attackRecord.AttackDate=new Date();
    if(this.attackRecordID!=undefined){
      this.spinService.Spin();
      this.attackRecordService.GetByID(this.attackRecordID).subscribe(x=>{
        if(x.result){
          this.attackRecord=x.data;
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
    if(this.attackRecordID==undefined){ //新增
      this.attackRecordService.Add(this.attackRecord).subscribe(x=>{
        if(x.result){
          this.alertService.success("新增成功");
          this.router.navigate(["/AttackRecordManage"]);
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
      this.attackRecordService.Edit(this.attackRecord).subscribe(x=>{
        if(x.result){
          this.alertService.success("修改成功");
          this.router.navigate(["/AttackRecordManage"]);
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
